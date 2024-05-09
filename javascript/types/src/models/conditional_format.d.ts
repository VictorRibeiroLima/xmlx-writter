export type ConditionalFormatEnumType = ("automatic" | "lowest" | "number" | "percent" | "formula" | "percentile" | "highest");
export type ConditionalFormatAverageRule = ("aboveAverage" | "belowAverage" | "equalOrAboveAverage" | "equalOrBelowAverage" | "oneStandardDeviationAbove" | "oneStandardDeviationBelow" | "twoStandardDeviationsAbove" | "twoStandardDeviationsBelow" | "threeStandardDeviationsAbove" | "threeStandardDeviationsBelow");
export type ConditionalFormatDataBarAxisPosition = ("automatic" | "midpoint" | "none");
export type ConditionalFormatDataBarDirection = ("context" | "leftToRight" | "rightToLeft");
export type ConditionalFormatDateRule = ("yesterday" | "today" | "tomorrow" | "last7Days" | "lastWeek" | "thisWeek" | "nextWeek" | "lastMonth" | "thisMonth" | "nextMonth");
export type ConditionalFormatIconType = ("treeArrows" | "threeArrowsGray" | "threeFlags" | "threeTrafficLights" | "threeTrafficLightsWithRim" | "threeSigns" | "threeSymbolsCircled" | "threeSymbols" | "threeStars" | "threeTriangles" | "fourArrows" | "fourArrowsGray" | "fourRedToBlack" | "fourHistograms" | "fourTrafficLights" | "fiveArrows" | "fiveArrowsGray" | "fiveHistograms" | "fiveQuadrants" | "fiveBoxes");
export type ConditionalFormatValue = (string | number | Date);
export type ConditionalFormatCellRuleType = ("equalTo" | "notEqualTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "between" | "notBetween");
export type ConditionalFormatCellRule = {
    /**
     * - The type of the rule.
     */
    type: ConditionalFormatCellRuleType;
    /**
     * - The value of the rule.
     */
    value: ConditionalFormatValue;
    /**
     * - The optional value of the rule (between, notBetween).
     */
    optionalValue?: ConditionalFormatValue;
};
export type ConditionalFormatTextRuleType = ("contains" | "doesNotContain" | "beginsWith" | "endsWith");
export type ConditionalFormatTopRuleType = ("top" | "bottom" | "topPercent" | "bottomPercent");
export type ConditionalFormatClassType = ("twoColorScale" | "threeColorScale" | "average" | "blank" | "cell" | "dataBar" | "date" | "duplicate" | "error" | "formula" | "iconSet" | "text" | "top");
export type ConditionalFormatColorScaleRule = {
    /**
     * - The type of the rule.
     */
    type: ConditionalFormatEnumType;
    /**
     * - The value of the rule.
     * /
     *
     * /**
     */
    value: ConditionalFormatValue;
};
/**
 * @typedef {(
 * "twoColorScale" |
 * "threeColorScale" |
 * "average" |
 * "blank" |
 * "cell" |
 * "dataBar" |
 * "date" |
 * "duplicate" |
 * "error" |
 * "formula" |
 * "iconSet" |
 * "text" |
 * "top"
 * )} ConditionalFormatClassType
 *
 * @class ConditionalFormat
 * @description Represents a generic conditional format.
 * @abstract
 * @property {number} id - The id of the conditional format.
 * @property {ConditionalFormatType} type - The type of the conditional format.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormat {
    /**
     * @param {ConditionalFormatClassType} type
     * @param {string} [multiRange]
     * @param {boolean} [stopIfTrue]
     */
    constructor(type: ConditionalFormatClassType, multiRange?: string, stopIfTrue?: boolean);
    /**
     * @type {number}
     * @default Math.floor(Math.random() * 1000000)
     */
    id: number;
    /**
     * @type {ConditionalFormatClassType}
     */
    type: ConditionalFormatClassType;
    /**
     * @type {string|undefined}
     * @default undefined
     */
    multiRange: string | undefined;
    /**
     * @type {boolean|undefined}
     * @default undefined
     */
    stopIfTrue: boolean | undefined;
    /**
     * @param {string} multiRange
     * @returns {void}
     */
    setMultiRange(multiRange: string): void;
    /**
     * @param {boolean} stopIfTrue
     * @returns {void}
     */
    setStopIfTrue(stopIfTrue: boolean): void;
}
/**
 * @typedef {(
 * "automatic" |
 * "lowest" |
 * "number" |
 * "percent" |
 * "formula" |
 * "percentile" |
 * "highest"
 * )} ConditionalFormatEnumType
 *
 * @typedef {(
 * "aboveAverage" |
 * "belowAverage" |
 * "equalOrAboveAverage" |
 * "equalOrBelowAverage" |
 * "oneStandardDeviationAbove" |
 * "oneStandardDeviationBelow" |
 * "twoStandardDeviationsAbove" |
 * "twoStandardDeviationsBelow" |
 * "threeStandardDeviationsAbove" |
 * "threeStandardDeviationsBelow"
 * )} ConditionalFormatAverageRule
 *
 * @typedef {(
 * "automatic" |
 * "midpoint" |
 * "none"
 * )} ConditionalFormatDataBarAxisPosition
 *
 * @typedef {(
 * "context" |
 * "leftToRight" |
 * "rightToLeft"
 * )} ConditionalFormatDataBarDirection
 *
 * @typedef {(
 * "yesterday" |
 * "today" |
 * "tomorrow" |
 * "last7Days" |
 * "lastWeek" |
 * "thisWeek" |
 * "nextWeek" |
 * "lastMonth" |
 * "thisMonth" |
 * "nextMonth"
 * )} ConditionalFormatDateRule
 *
 * @typedef {(
 * "treeArrows" |
 * "threeArrowsGray" |
 * "threeFlags" |
 * "threeTrafficLights" |
 * "threeTrafficLightsWithRim" |
 * "threeSigns" |
 * "threeSymbolsCircled" |
 * "threeSymbols" |
 * "threeStars" |
 * "threeTriangles" |
 * "fourArrows" |
 * "fourArrowsGray" |
 * "fourRedToBlack" |
 * "fourHistograms" |
 * "fourTrafficLights" |
 * "fiveArrows" |
 * "fiveArrowsGray" |
 * "fiveHistograms" |
 * "fiveQuadrants" |
 * "fiveBoxes"
 * )} ConditionalFormatIconType
 */
/**
 *   @typedef {(string|number|Date)} ConditionalFormatValue
 */
/**
 * @typedef {(
 * "equalTo" |
 * "notEqualTo" |
 * "greaterThan" |
 * "greaterThanOrEqualTo" |
 * "lessThan" |
 * "lessThanOrEqualTo" |
 * "between" |
 * "notBetween"
 * )} ConditionalFormatCellRuleType
 * @typedef {Object} ConditionalFormatCellRule
 * @property {ConditionalFormatCellRuleType} type - The type of the rule.
 * @property {ConditionalFormatValue} value - The value of the rule.
 * @property {ConditionalFormatValue} [optionalValue] - The optional value of the rule (between, notBetween).
 */
/**
 * @typedef {(
 * "contains" |
 * "doesNotContain" |
 * "beginsWith" |
 * "endsWith"
 * )} ConditionalFormatTextRuleType
 *
 * @class ConditionalFormatTextRule
 * @classdesc Represents a rule for a conditional format text.
 * @property {ConditionalFormatTextRule} type - The type of the rule.
 * @property {string} value - The value of the rule.
 */
export class ConditionalFormatTextRule {
    /**
     * @param {ConditionalFormatTextRuleType} type
     * @param {string} value
     */
    constructor(type: ConditionalFormatTextRuleType, value: string);
    /**
     * @type {ConditionalFormatTextRuleType}
     */
    type: ConditionalFormatTextRuleType;
    /**
     * @type {string}
     */
    value: string;
}
/**
 * @typedef {(
 * "top" |
 * "bottom" |
 * "topPercent" |
 * "bottomPercent"
 * )} ConditionalFormatTopRuleType
 *
 * @class ConditionalFormatTopRule
 * @classdesc Represents a rule for a conditional format top.
 * @property {ConditionalFormatTopRuleType} type - The type of the rule.
 * @property {number} value - The value of the rule.
 */
export class ConditionalFormatTopRule {
    /**
     * @param {ConditionalFormatTopRuleType} type
     * @param {number} value
     */
    constructor(type: ConditionalFormatTopRuleType, value: number);
    /**
     * @type {ConditionalFormatTopRuleType}
     */
    type: ConditionalFormatTopRuleType;
    /**
     * @type {number}
     */
    value: number;
}
/**
 * @typedef {Object} ConditionalFormatColorScaleRule
 * @property {ConditionalFormatEnumType} type - The type of the rule.
 * @property {ConditionalFormatValue} value - The value of the rule.
 * /

/**
 * @class ConditionalFormatTwoColorScale
 * @classdesc Represents a 2 Color Scale conditional format.
 * Used to represent a Cell style conditional format in Excel. A 2 Color Scale Cell conditional format shows a per cell color gradient from the minimum value to the maximum value.
 * @extends ConditionalFormat
 * @property {Color} [minColor] - The color for the minimum value.(If not set, Excel will use the default color for the minimum value)
 * @property {Color} [maxColor] - The color for the maximum value.(If not set, Excel will use the default color for the maximum value)
 * @property {ConditionalFormatTwoColorScaleRule} [minRule] - The rule for the minimum value.
 * @property {ConditionalFormatTwoColorScaleRule} [maxRule] - The rule for the maximum value.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatTwoColorScale extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {Color} [options.minColor] - The color for the minimum value.
     * @param {Color} [options.maxColor] - The color for the maximum value.
     * @param {ConditionalFormatColorScaleRule} [options.minRule] - The rule for the minimum value.
     * @param {ConditionalFormatColorScaleRule} [options.maxRule] - The rule for the maximum value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        minColor?: Color;
        maxColor?: Color;
        minRule?: ConditionalFormatColorScaleRule;
        maxRule?: ConditionalFormatColorScaleRule;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    minColor: Color | undefined;
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    maxColor: Color | undefined;
    /**
     * @type {ConditionalFormatColorScaleRule|undefined}
     * @default undefined
     */
    minRule: ConditionalFormatColorScaleRule | undefined;
    /**
     * @type {ConditionalFormatColorScaleRule|undefined}
     * @default undefined
     */
    maxRule: ConditionalFormatColorScaleRule | undefined;
    /**
     * @param {Color} color
     */
    setMinColor(color: Color): void;
    /**
     * @param {Color} color
     */
    setMaxColor(color: Color): void;
    /**
     * @param {ConditionalFormatColorScaleRule} rule
     */
    setMinRule(rule: ConditionalFormatColorScaleRule): void;
    /**
     * @param {ConditionalFormatColorScaleRule} rule
     */
    setMaxRule(rule: ConditionalFormatColorScaleRule): void;
}
/**
 * @class ConditionalFormatTreeColorScale
 * @classdesc Represents a 3 Color Scale conditional format.
 * Used to represent a Cell style conditional format in Excel. A 3 Color Scale Cell conditional format shows a per cell color gradient from the minimum value to the maximum value.
 * @extends ConditionalFormatTwoColorScale
 * @property {Color} [midColor] - The color for the mid value.(If not set, Excel will use the default color for the mid value)
 * @property {ConditionalFormatTwoColorScaleRule} [midRule] - The rule for the mid value.
 */
export class ConditionalFormatThreeColorScale extends ConditionalFormatTwoColorScale {
    /**
     * @param {Object} [options] - The options object
     * @param {Color} [options.minColor] - The color for the minimum value.
     * @param {Color} [options.midColor] - The color for the mid value.
     * @param {Color} [options.maxColor] - The color for the maximum value.
     * @param {ConditionalFormatColorScaleRule} [options.minRule] - The rule for the minimum value.
     * @param {ConditionalFormatColorScaleRule} [options.midRule] - The rule for the maximum value.
     * @param {ConditionalFormatColorScaleRule} [options.maxRule] - The rule for the maximum value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        minColor?: Color;
        midColor?: Color;
        maxColor?: Color;
        minRule?: ConditionalFormatColorScaleRule;
        midRule?: ConditionalFormatColorScaleRule;
        maxRule?: ConditionalFormatColorScaleRule;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    midColor: Color | undefined;
    /**
     * @type {ConditionalFormatColorScaleRule|undefined}
     * @default undefined
     */
    midRule: ConditionalFormatColorScaleRule | undefined;
    /**
     * @param {Color} color
     */
    setMidColor(color: Color): void;
    /**
     * @param {ConditionalFormatColorScaleRule} rule
     */
    setMidRule(rule: ConditionalFormatColorScaleRule): void;
}
/**
 * @class ConditionalFormatAverage
 * @classdesc Represents an Average/Standard Deviation style conditional format
 * Is used to represent a Average or Standard Deviation style conditional format in Excel
 * @property {ConditionalFormatAverageRule} rule - The rule for the average value.(default: 'aboveAverage')
 * @property {Format} [format] - The format for the average value.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatAverage extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {ConditionalFormatAverageRule} [options.rule] - The rule for the average value.(default: 'aboveAverage')
     * @param {Format} [options.format] - The format for the average value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        rule?: ConditionalFormatAverageRule;
        format?: Format;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {ConditionalFormatAverageRule}
     * @default 'aboveAverage'
     */
    rule: ConditionalFormatAverageRule;
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @param {ConditionalFormatAverageRule} rule
     */
    setRule(rule: ConditionalFormatAverageRule): void;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
}
/**
 * @class ConditionalFormatBlank
 * @classdesc Represents a a Blank/Non-blank conditional format.
 * @extends ConditionalFormat
 * @property {boolean} invert - Inverts the conditional format.
 * @property {Format} [format] - The format for the average value.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatBlank extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {boolean} [options.invert] - Inverts the conditional format.
     * @param {Format} [options.format] - The format for the average value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        invert?: boolean;
        format?: Format;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {boolean}
     * @default false
     */
    invert: boolean;
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @param {boolean} invert
     */
    setInvert(invert: boolean): void;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
}
/**
 * @class ConditionalFormatCell
 * @classdesc Represents a cell style conditional format.
 * @extends ConditionalFormat
 * @property {ConditionalFormatCellRule} rule - The rule for the cell.
 * @property {Format} [format] - The format for the cell.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatCell extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {ConditionalFormatCellRule} [options.rule] - The rule for the cell.
     * @param {Format} [options.format] - The format for the cell.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        rule?: ConditionalFormatCellRule;
        format?: Format;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {ConditionalFormatCellRule}
     */
    rule: ConditionalFormatCellRule;
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @param {ConditionalFormatCellRule} rule
     */
    setRule(rule: ConditionalFormatCellRule): void;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
}
import Color = require("./color");
import Format = require("./format");
//# sourceMappingURL=conditional_format.d.ts.map