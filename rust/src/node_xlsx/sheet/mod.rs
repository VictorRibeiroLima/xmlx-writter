mod array_formula_value;
mod conditional_format_value;
mod config;
mod table_value;

use std::collections::HashMap;

use neon::{
    context::FunctionContext,
    handle::Handle,
    object::Object,
    result::NeonResult,
    types::{JsArray, JsObject, JsString, JsValue},
};
use rust_xlsxwriter::{Format, Worksheet, XlsxError};
use table_value::NodeXlsxTableValue;

use self::{
    array_formula_value::ArrayFormulaSheetValue,
    conditional_format_value::ConditionalFormatSheetValue, config::RowColumnConfig,
};

use super::{cell::NodeXlsxCell, conditional_format::c_type::NodeXlsxConditionalFormatType};

pub struct NodeXlsxSheet {
    name: String,
    cells: Vec<NodeXlsxCell>,
    conditional_formats: Vec<ConditionalFormatSheetValue>,
    array_formulas: Vec<ArrayFormulaSheetValue>,
    row_config: Vec<RowColumnConfig>,
    column_config: Vec<RowColumnConfig>,
    tables: Vec<NodeXlsxTableValue>,

    format_map: HashMap<u32, Format>,
    conditional_format_map: HashMap<u32, NodeXlsxConditionalFormatType>,
}

impl NodeXlsxSheet {
    pub fn from_js_object(cx: &mut FunctionContext, obj: Handle<JsObject>) -> NeonResult<Self> {
        let name: Handle<JsString> = obj.get(cx, "name")?;
        let name = name.value(cx);

        let cells: Handle<JsArray> = obj.get(cx, "cells")?;
        let cells: Vec<Handle<JsValue>> = cells.to_vec(cx)?;

        let conditional_formats: Handle<JsArray> = obj.get(cx, "conditionalFormats")?;
        let conditional_formats: Vec<Handle<JsValue>> = conditional_formats.to_vec(cx)?;

        let array_formulas: Handle<JsArray> = obj.get(cx, "arrayFormulas")?;
        let array_formulas: Vec<Handle<JsValue>> = array_formulas.to_vec(cx)?;

        let tables: Handle<JsArray> = obj.get(cx, "tables")?;
        let tables: Vec<Handle<JsValue>> = tables.to_vec(cx)?;

        let mut inner_cells = vec![];
        let mut inner_formulas = vec![];
        let mut inner_conditional_formats = vec![];
        let mut inner_tables = vec![];
        let mut format_map = HashMap::new();
        let mut conditional_format_map = HashMap::new();

        let row_config: Handle<JsArray> = obj.get(cx, "rowConfigs")?;
        let row_config =
            RowColumnConfig::from_js_array(cx, row_config, config::Type::ROW, &mut format_map)?;

        let column_config: Handle<JsArray> = obj.get(cx, "columnConfigs")?;
        let column_config = RowColumnConfig::from_js_array(
            cx,
            column_config,
            config::Type::COLUMN,
            &mut format_map,
        )?;

        for formula in array_formulas {
            let formula = formula.downcast_or_throw::<JsObject, FunctionContext>(cx)?;
            let formula = ArrayFormulaSheetValue::from_js_object(cx, formula, &mut format_map)?;
            inner_formulas.push(formula);
        }

        for cell in cells {
            let cell = cell.downcast_or_throw::<JsObject, FunctionContext>(cx)?;

            let cell = NodeXlsxCell::from_js_object(cx, cell, &mut format_map)?;
            inner_cells.push(cell);
        }

        for conditional_format in conditional_formats {
            let conditional_format =
                conditional_format.downcast_or_throw::<JsObject, FunctionContext>(cx)?;
            let conditional_format = ConditionalFormatSheetValue::from_js_object(
                cx,
                conditional_format,
                &mut format_map,
                &mut conditional_format_map,
            )?;
            inner_conditional_formats.push(conditional_format);
        }

        for table in tables {
            let table = table.downcast_or_throw::<JsObject, FunctionContext>(cx)?;
            let table = NodeXlsxTableValue::from_js_object(cx, table, &mut format_map)?;
            inner_tables.push(table);
        }

        return Ok(Self {
            name,
            cells: inner_cells,
            conditional_formats: inner_conditional_formats,
            array_formulas: inner_formulas,
            format_map,
            conditional_format_map,
            row_config,
            column_config,
            tables: inner_tables,
        });
    }
}

impl TryInto<Worksheet> for NodeXlsxSheet {
    type Error = XlsxError;
    fn try_into(self) -> Result<Worksheet, XlsxError> {
        let format_map = self.format_map;
        let conditional_format_map = self.conditional_format_map;
        let mut worksheet = Worksheet::new();
        worksheet.set_name(&self.name)?;
        for rc in self.row_config {
            rc.write_to_sheet(&mut worksheet, &format_map)?;
        }

        for cc in self.column_config {
            cc.write_to_sheet(&mut worksheet, &format_map)?;
        }

        for cf in self.conditional_formats {
            cf.set_conditional_format(&mut worksheet, &conditional_format_map)?;
        }

        for af in self.array_formulas {
            let first_row = af.first_row;
            let last_row = af.last_row;
            let first_column = af.first_column;
            let last_column = af.last_column;
            let formula = af.formula;
            let dynamic = af.dynamic;
            let has_format = af.format.is_some();
            if dynamic && !has_format {
                worksheet.write_dynamic_array_formula(
                    first_row,
                    first_column,
                    last_row,
                    last_column,
                    formula,
                )?;
            } else if dynamic && has_format {
                let format = af.format.unwrap();
                let format = format_map.get(&format).unwrap();
                worksheet.write_dynamic_array_formula_with_format(
                    first_row,
                    first_column,
                    last_row,
                    last_column,
                    formula,
                    format,
                )?;
            } else if !dynamic && !has_format {
                worksheet.write_array_formula(
                    first_row,
                    first_column,
                    last_row,
                    last_column,
                    formula,
                )?;
            } else {
                let format = af.format.unwrap();
                let format = format_map.get(&format).unwrap();
                worksheet.write_array_formula_with_format(
                    first_row,
                    first_column,
                    last_row,
                    last_column,
                    formula,
                    format,
                )?;
            }
        }

        for cell in self.cells {
            cell.write_to_sheet(&mut worksheet, &format_map)?;
        }

        for table in self.tables {
            let first_row = table.first_row;
            let last_row = table.last_row;
            let first_column = table.first_column;
            let last_column = table.last_column;
            let table = table.table;
            worksheet.add_table(first_row, first_column, last_row, last_column, &table)?;
        }
        return Ok(worksheet);
    }
}
