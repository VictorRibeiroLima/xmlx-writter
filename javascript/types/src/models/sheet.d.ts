export = Sheet;
/**
 *
 * @class Sheet
 * @classdesc A sheet is a collection of cells.
 * @property {string} name - The name of the sheet
 * @property {Cell[]} cells - The cells in the sheet
 */
declare class Sheet {
    /**
     * @param {string} name - The name of the sheet
     */
    constructor(name: string);
    /**
     * The name of the sheet
     * @type {string}
     */
    name: string;
    /**
     * The cells in the sheet
     * @type {Cell[]}
     */
    cells: Cell[];
    /**
     * Writes a cell to the sheet
     *
     * @param {number} col - The column index of the cell
     * @param {number} row - The row index of the cell
     * @param {string|number|Link|Date|any} value - The value of the cell.
     * @param {("number"|"string"|"link"|"date")} [cellType] - The type of the cell(if not provider .toString() will be used)
     * @param {Format} [format] - The format of the cell
     * @returns {void}
     * @throws {Error} - col > 65_535 or col < 0
     * @throws {Error} - row > 1_048_577 or row < 0
     */
    writeCell(col: number, row: number, value: string | number | Link | Date | any, cellType?: ("number" | "string" | "link" | "date"), format?: Format): void;
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
    writeString(col: number, row: number, value: string, format?: Format): void;
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
    writeNumber(col: number, row: number, value: number, format?: Format): void;
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
    writeLink(col: number, row: number, value: Link, format?: Format): void;
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
    writeDate(col: number, row: number, value: Date, format?: Format): void;
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
    writeFromJson(objects: any[], { headerFormat, cellFormat, columnFormats }?: {
        /**
         * - The format of the header cells
         */
        headerFormat?: Format;
        /**
         * - The format of the data cells
         */
        cellFormat?: Format;
        /**
         * - The format of the cells in the columns
         * Writes the sheet based on the provided array of objects
         * For performance reasons the headers will be generated based on the first object
         * and those headers will be used for the rest of the objects,so if the objects have different keys
         * the keys that are not in the first object will not be written to the sheet
         */
        columnFormats?: {
            [x: string]: Format;
        };
    }): void;
}
import Cell = require("./cell");
import Link = require("./link");
import Format = require("./format");
//# sourceMappingURL=sheet.d.ts.map