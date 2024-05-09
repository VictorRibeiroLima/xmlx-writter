// @ts-check

const Cell = require('./cell');
const Format = require('./format');
const Link = require('./link');
const Formula = require('./formula');
const { ConditionalFormat } = require('./conditional_format');

/**
 * @class ConditionalFormatSheetValue
 * @classdesc Represents the values of a conditional format sheet.
 * @property {number} firstRow - The first row of the range
 * @property {number} lastRow - The last row of the range
 * @property {number} firstColumn - The first column of the range
 * @property {number} lastColumn - The last column of the range
 * @property {ConditionalFormat} format - The format of the range
 *
 */
class ConditionalFormatSheetValue {
  /**
   * @param {number} firstRow - The first row of the range
   * @param {number} lastRow - The last row of the range
   * @param {number} firstColumn - The first column of the range
   * @param {number} lastColumn - The last column of the range
   * @param {ConditionalFormat} format - The format of the range
   */
  constructor(firstRow, lastRow, firstColumn, lastColumn, format) {
    /**
     * The first row of the range
     * @type {number}
     */
    this.firstRow = firstRow;
    /**
     * The last row of the range
     * @type {number}
     */
    this.lastRow = lastRow;
    /**
     * The first column of the range
     * @type {number}
     */
    this.firstColumn = firstColumn;
    /**
     * The last column of the range
     * @type {number}
     */
    this.lastColumn = lastColumn;
    /**
     * The format of the range
     * @type {ConditionalFormat}
     */
    this.format = format;
  }
}

/**
 * @class ArrayFormulaSheetValue
 * @classdesc Represents the values of an array formula sheet.
 * @property {number} firstRow - The first row of the range
 * @property {number} lastRow - The last row of the range
 * @property {number} firstColumn - The first column of the range
 * @property {number} lastColumn - The last column of the range
 * @property {Formula} formula - The formula of the range
 * @property {Format} [format] - The format of the range
 */
class ArrayFormulaSheetValue {
  /**
   * @param {Object} opts - The options for the array formula
   * @param {number} opts.firstRow - The first row of the range
   * @param {number} opts.lastRow - The last row of the range
   * @param {number} opts.firstColumn - The first column of the range
   * @param {number} opts.lastColumn - The last column of the range
   * @param {Formula} opts.formula - The formula of the range
   * @param {Format} [opts.format] - The format of the range
   */
  constructor(opts) {
    const { firstRow, lastRow, firstColumn, lastColumn, formula } = opts;
    /**
     * The first row of the range
     * @type {number}
     */
    this.firstRow = firstRow;
    /**
     * The last row of the range
     * @type {number}
     */
    this.lastRow = lastRow;
    /**
     * The first column of the range
     * @type {number}
     */
    this.firstColumn = firstColumn;
    /**
     * The last column of the range
     * @type {number}
     */
    this.lastColumn = lastColumn;
    /**
     * The formula of the range
     * @type {Formula}
     */
    this.formula = formula;

    /**
     * The format of the range
     * @type {Format|undefined}
     */
    this.format = opts.format ?? undefined;
  }
}

/**
 *
 * @class Sheet
 * @classdesc A sheet is a collection of cells.
 * @property {string} name - The name of the sheet
 * @property {Cell[]} cells - The cells in the sheet
 * @property {ConditionalFormatSheetValue[]} conditionalFormats - The conditional format values of the sheet
 * @property {ArrayFormulaSheetValue[]} arrayFormulas - The array formulas of the sheet
 */
class Sheet {
  /**
   * @param {string} name - The name of the sheet
   */
  constructor(name) {
    /**
     * The name of the sheet
     * @type {string}
     */
    this.name = name;
    /**
     * The cells in the sheet
     * @type {Cell[]}
     */
    this.cells = [];

    /**
     * The conditional format values of the sheet
     * @type {ConditionalFormatSheetValue[]}
     */
    this.conditionalFormats = [];

    /**
     * The array formulas of the sheet
     * @type {ArrayFormulaSheetValue[]}
     */
    this.arrayFormulas = [];
  }

  /**
   * Adds a conditional format to the sheet
   * @param {Object} opts - The options for the conditional format
   * @param {number} opts.firstRow - The first row of the range
   * @param {number} opts.lastRow - The last row of the range
   * @param {number} opts.firstColumn - The first column of the range
   * @param {number} opts.lastColumn - The last column of the range
   * @param {ConditionalFormat} opts.format - The format of the range
   * @returns {void}
   */
  addConditionalFormat(opts) {
    const { firstRow, lastRow, firstColumn, lastColumn, format } = opts;
    const conditionalSheetValue = new ConditionalFormatSheetValue(
      firstRow,
      lastRow,
      firstColumn,
      lastColumn,
      format,
    );
    this.conditionalFormats.push(conditionalSheetValue);
  }

  /**
   * adds an array formula to the sheet
   * @param {ArrayFormulaSheetValue} arrayFormula
   */
  addArrayFormula(arrayFormula) {
    this.arrayFormulas.push(arrayFormula);
  }

  /**
   * Writes a cell to the sheet
   *
   * @param {number} col - The column index of the cell
   * @param {number} row - The row index of the cell
   * @param {string|number|Link|Date|Formula|any} value - The value of the cell.
   * @param {("number"|"string"|"link"|"date"|"formula")} [cellType] - The type of the cell(if not provider .toString() will be used)
   * @param {Format} [format] - The format of the cell
   * @returns {void}
   * @throws {Error} - col > 65_535 or col < 0
   * @throws {Error} - row > 1_048_577 or row < 0
   */
  writeCell(col, row, value, cellType, format) {
    if (col > 65_535 || col < 0) {
      throw new Error('Invalid column index');
    }
    if (row > 1_048_577 || row < 0) {
      throw new Error('Invalid row index');
    }
    const cell = new Cell({
      col,
      row,
      value,
      cellType,
      format,
    });
    this.cells.push(cell);
  }

  /**
   * writes a string value to a cell
   * @param {number} col - The column index of the cell
   * @param {number} row - The row index of the cell
   * @param {string} value - The value to write to the cell
   * @param {Format} [format] - The format of the cell
   * @returns {void}
   * @throws {Error} - col > 65_535 or col < 0
   * @throws {Error} - row > 1_048_577 or row < 0
   */
  writeString(col, row, value, format) {
    this.writeCell(col, row, value, 'string', format);
  }

  /**
   * writes a number value to a cell
   * @param {number} col - The column index of the cell
   * @param {number} row - The row index of the cell
   * @param {number} value - The value to write to the cell
   * @param {Format} [format] - The format of the cell
   * @returns {void}
   * @throws {Error} - col > 65_535 or col < 0
   * @throws {Error} - row > 1_048_577 or row < 0
   */
  writeNumber(col, row, value, format) {
    if (!isNaN(value)) {
      this.writeCell(col, row, value, 'number', format);
      return;
    }
    this.writeCell(col, row, value, 'string', format);
  }

  /**
   * writes a link value to a cell
   * @param {number} col - The column index of the cell
   * @param {number} row - The row index of the cell
   * @param {Link} value - The value to write to the cell
   * @param {Format} [format] - The format of the cell
   * @returns {void}
   * @throws {Error} - col > 65_535 or col < 0
   * @throws {Error} - row > 1_048_577 or row < 0
   */
  writeLink(col, row, value, format) {
    this.writeCell(col, row, value, 'link', format);
  }

  /**
   * writes a date value to a cell
   * @param {number} col - The column index of the cell
   * @param {number} row - The row index of the cell
   * @param {Date} value - The value to write to the cell
   * @param {Format} [format] - The format of the cell
   * @returns {void}
   * @throws {Error} - col > 65_535 or col < 0
   * @throws {Error} - row > 1_048_577 or row < 0
   */
  writeDate(col, row, value, format) {
    this.writeCell(col, row, value, 'date', format);
  }

  /**
   * writes a formula value to a cell
   * @param {number} col - The column index of the cell
   * @param {number} row - The row index of the cell
   * @param {Formula} value - The value to write to the cell
   * @param {Format} [format] - The format of the cell
   * @returns {void}
   */
  writeFormula(col, row, value, format) {
    this.writeCell(col, row, value, 'formula', format);
  }

  /**
   *
   * @typedef {Object} FormatOptions
   * @property {Format} [headerFormat] - The format of the header cells
   * @property {Format} [cellFormat] - The format of the data cells
   * @property {Object.<string, Format>} [columnFormats] - The format of the cells in the columns
   * Writes the sheet based on the provided array of objects
   * For performance reasons the headers will be generated based on the first object
   * and those headers will be used for the rest of the objects,so if the objects have different keys
   * the keys that are not in the first object will not be written to the sheet
   * @param {Object[]} objects - The objects to write to the sheet
   * @param {FormatOptions} [opts] - The format of the header cells
   * @returns {void}
   */
  writeFromJson(objects, { headerFormat, cellFormat, columnFormats } = {}) {
    if (objects.length === 0) {
      return;
    }

    const keys = Object.keys(objects[0]);
    // write headers
    for (let i = 0; i < keys.length; i++) {
      const format = headerFormat || columnFormats?.[keys[i]];
      this.writeString(i, 0, keys[i], format);
    }

    // write data
    for (let i = 0; i < objects.length; i++) {
      for (let j = 0; j < keys.length; j++) {
        const format = columnFormats?.[keys[j]] || cellFormat;
        const type = typeof objects[i][keys[j]];
        const value = objects[i][keys[j]];
        switch (type) {
          case 'string':
            this.writeString(j, i + 1, value, format);
            break;
          case 'number':
            this.writeNumber(j, i + 1, value, format);
            break;
          case 'object':
            if (value instanceof Link) {
              this.writeLink(j, i + 1, value, format);
            } else if (value instanceof Date) {
              this.writeCell(j, i + 1, value, 'date', format);
            } else {
              this.writeCell(j, i + 1, value, null, format);
            }
            break;
          default:
            this.writeCell(j, i + 1, value, null, format);
        }
      }
    }
  }
}

module.exports = { Sheet, ArrayFormulaSheetValue };
