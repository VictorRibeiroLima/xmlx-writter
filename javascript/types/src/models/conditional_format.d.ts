export type ConditionalFormatEnumType = ("automatic" | "lowest" | "number" | "percent" | "formula" | "percentile" | "highest");
export type ConditionalFormatAverageRule = ("aboveAverage" | "belowAverage" | "equalOrAboveAverage" | "equalOrBelowAverage" | "oneStandardDeviationAbove" | "oneStandardDeviationBelow" | "twoStandardDeviationsAbove" | "twoStandardDeviationsBelow" | "threeStandardDeviationsAbove" | "threeStandardDeviationsBelow");
export type ConditionalFormatDataBarAxisPosition = ("automatic" | "midpoint" | "none");
export type ConditionalFormatDataBarDirection = ("context" | "leftToRight" | "rightToLeft");
export type ConditionalFormatDateRule = ("yesterday" | "today" | "tomorrow" | "last7Days" | "lastWeek" | "thisWeek" | "nextWeek" | "lastMonth" | "thisMonth" | "nextMonth");
export type ConditionalFormatIconType = ("threeArrows" | "threeArrowsGray" | "threeFlags" | "threeTrafficLights" | "threeTrafficLightsWithRim" | "threeSigns" | "threeSymbolsCircled" | "threeSymbols" | "threeStars" | "threeTriangles" | "fourArrows" | "fourArrowsGray" | "fourRedToBlack" | "fourHistograms" | "fourTrafficLights" | "fiveArrows" | "fiveArrowsGray" | "fiveHistograms" | "fiveQuadrants" | "fiveBoxes");
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
export type ConditionalFormatTextRule = {
    /**
     * - The type of the rule.
     */
    type: ConditionalFormatTextRuleType;
    /**
     * - The value of the rule.
     */
    value: string;
};
export type ConditionalFormatTopRuleType = ("top" | "bottom" | "topPercent" | "bottomPercent");
export type ConditionalFormatTopRule = {
    /**
     * - The type of the rule.
     */
    type: ConditionalFormatTopRuleType;
    /**
     * - The value of the rule.
     */
    value: number;
};
export type ConditionalFormatClassType = ("twoColorScale" | "threeColorScale" | "average" | "blank" | "cell" | "dataBar" | "date" | "duplicate" | "error" | "formula" | "iconSet" | "text" | "top");
export type ConditionalFormatTypeRule = {
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
 * "threeArrows" |
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
 * @typedef {Object} ConditionalFormatTextRule
 * @property {ConditionalFormatTextRuleType} type - The type of the rule.
 * @property {string} value - The value of the rule.
 */
/**
 * @typedef {(
 * "top" |
 * "bottom" |
 * "topPercent" |
 * "bottomPercent"
 * )} ConditionalFormatTopRuleType
 *
 * @typedef {Object} ConditionalFormatTopRule
 * @property {ConditionalFormatTopRuleType} type - The type of the rule.
 * @property {number} value - The value of the rule.
 */
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
 * @typedef {Object} ConditionalFormatTypeRule
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
     * @param {ConditionalFormatTypeRule} [options.minRule] - The rule for the minimum value.
     * @param {ConditionalFormatTypeRule} [options.maxRule] - The rule for the maximum value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        minColor?: Color;
        maxColor?: Color;
        minRule?: ConditionalFormatTypeRule;
        maxRule?: ConditionalFormatTypeRule;
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
     * @type {ConditionalFormatTypeRule|undefined}
     * @default undefined
     */
    minRule: ConditionalFormatTypeRule | undefined;
    /**
     * @type {ConditionalFormatTypeRule|undefined}
     * @default undefined
     */
    maxRule: ConditionalFormatTypeRule | undefined;
    /**
     * @param {Color} color
     */
    setMinColor(color: Color): void;
    /**
     * @param {Color} color
     */
    setMaxColor(color: Color): void;
    /**
     * @param {ConditionalFormatTypeRule} rule
     */
    setMinRule(rule: ConditionalFormatTypeRule): void;
    /**
     * @param {ConditionalFormatTypeRule} rule
     */
    setMaxRule(rule: ConditionalFormatTypeRule): void;
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
     * @param {ConditionalFormatTypeRule} [options.minRule] - The rule for the minimum value.
     * @param {ConditionalFormatTypeRule} [options.midRule] - The rule for the maximum value.
     * @param {ConditionalFormatTypeRule} [options.maxRule] - The rule for the maximum value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        minColor?: Color;
        midColor?: Color;
        maxColor?: Color;
        minRule?: ConditionalFormatTypeRule;
        midRule?: ConditionalFormatTypeRule;
        maxRule?: ConditionalFormatTypeRule;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    midColor: Color | undefined;
    /**
     * @type {ConditionalFormatTypeRule|undefined}
     * @default undefined
     */
    midRule: ConditionalFormatTypeRule | undefined;
    /**
     * @param {Color} color
     */
    setMidColor(color: Color): void;
    /**
     * @param {ConditionalFormatTypeRule} rule
     */
    setMidRule(rule: ConditionalFormatTypeRule): void;
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
/**
 * @class ConditionalFormatDataBar
 * @classdesc Represents a Data Bar style conditional format.
 * @extends ConditionalFormat
 * @property {Color} [axisColor] - The color of the axis.
 * @property {ConditionalFormatDataBarAxisPosition} [axisPosition] - The position of the axis.
 * @property {boolean} [barOnly] - Show only the bar.
 * @property {Color} [borderColor] - The color of the border.
 * @property {boolean} [borderOff] - Turn off the border.
 * @property {ConditionalFormatDataBarDirection} [direction] - The direction of the data bar.
 * @property {Color} [fillColor] - The color of the fill.
 * @property {ConditionalFormatTypeRule} [maxRule] - The rule for the maximum value.
 * @property {ConditionalFormatTypeRule} [minRule] - The rule for the minimum value.
 * @property {Color} [negativeBorderColor] - The color of the negative border.
 * @property {Color} [negativeFillColor] - The color of the negative fill.
 * @property {boolean} [solidFill] - Show a solid fill.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatDataBar extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {Color} [options.axisColor] - The color of the axis.
     * @param {ConditionalFormatDataBarAxisPosition} [options.axisPosition] - The position of the axis.
     * @param {boolean} [options.barOnly] - Show only the bar.
     * @param {Color} [options.borderColor] - The color of the border.
     * @param {boolean} [options.borderOff] - Turn off the border.
     * @param {ConditionalFormatDataBarDirection} [options.direction] - The direction of the data bar.
     * @param {Color} [options.fillColor] - The color of the fill.
     * @param {ConditionalFormatTypeRule} [options.maxRule] - The rule for the maximum value.
     * @param {ConditionalFormatTypeRule} [options.minRule] - The rule for the minimum value.
     * @param {Color} [options.negativeBorderColor] - The color of the negative border.
     * @param {Color} [options.negativeFillColor] - The color of the negative fill.
     * @param {boolean} [options.solidFill] - Show a solid fill.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        axisColor?: Color;
        axisPosition?: ConditionalFormatDataBarAxisPosition;
        barOnly?: boolean;
        borderColor?: Color;
        borderOff?: boolean;
        direction?: ConditionalFormatDataBarDirection;
        fillColor?: Color;
        maxRule?: ConditionalFormatTypeRule;
        minRule?: ConditionalFormatTypeRule;
        negativeBorderColor?: Color;
        negativeFillColor?: Color;
        solidFill?: boolean;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    axisColor: Color | undefined;
    /**
     * @type {ConditionalFormatDataBarAxisPosition|undefined}
     * @default undefined
     */
    axisPosition: ConditionalFormatDataBarAxisPosition | undefined;
    /**
     * @type {boolean|undefined}
     * @default undefined
     */
    barOnly: boolean | undefined;
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    borderColor: Color | undefined;
    /**
     * @type {boolean|undefined}
     * @default undefined
     */
    borderOff: boolean | undefined;
    /**
     * @type {ConditionalFormatDataBarDirection|undefined}
     * @default undefined
     */
    direction: ConditionalFormatDataBarDirection | undefined;
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    fillColor: Color | undefined;
    /**
     * @type {ConditionalFormatTypeRule|undefined}
     * @default undefined
     */
    maxRule: ConditionalFormatTypeRule | undefined;
    /**
     * @type {ConditionalFormatTypeRule|undefined}
     * @default undefined
     */
    minRule: ConditionalFormatTypeRule | undefined;
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    negativeBorderColor: Color | undefined;
    /**
     * @type {Color|undefined}
     * @default undefined
     */
    negativeFillColor: Color | undefined;
    /**
     * @type {boolean|undefined}
     * @default undefined
     */
    solidFill: boolean | undefined;
    /**
     * @param {Color} color
     */
    setAxisColor(color: Color): void;
    /**
     * @param {ConditionalFormatDataBarAxisPosition} position
     */
    setAxisPosition(position: ConditionalFormatDataBarAxisPosition): void;
    /**
     * @param {boolean} barOnly
     */
    setBarOnly(barOnly: boolean): void;
    /**
     * @param {Color} color
     */
    setBorderColor(color: Color): void;
    /**
     * @param {boolean} borderOff
     */
    setBorderOff(borderOff: boolean): void;
    /**
     * @param {ConditionalFormatDataBarDirection} direction
     */
    setDirection(direction: ConditionalFormatDataBarDirection): void;
    /**
     * @param {Color} color
     */
    setFillColor(color: Color): void;
    /**
     * @param {ConditionalFormatTypeRule} rule
     */
    setMaxRule(rule: ConditionalFormatTypeRule): void;
    /**
     * @param {ConditionalFormatTypeRule} rule
     */
    setMinRule(rule: ConditionalFormatTypeRule): void;
    /**
     * @param {Color} color
     */
    setNegativeBorderColor(color: Color): void;
    /**
     * @param {Color} color
     */
    setNegativeFillColor(color: Color): void;
    /**
     * @param {boolean} solidFill
     */
    setSolidFill(solidFill: boolean): void;
}
/**
 * @class ConditionalFormatDate
 * @classdesc Represents a Date style conditional format.
 * @extends ConditionalFormat
 * @property {Format} [format] - The format for the date.
 * @property {ConditionalFormatDateRule} [rule] - The rule for the date.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatDate extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {Format} [options.format] - The format for the date.
     * @param {ConditionalFormatDateRule} [options.rule] - The rule for the date.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        format?: Format;
        rule?: ConditionalFormatDateRule;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @type {ConditionalFormatDateRule|undefined}
     */
    rule: ConditionalFormatDateRule | undefined;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
    /**
     * @param {ConditionalFormatDateRule} rule
     */
    setRule(rule: ConditionalFormatDateRule): void;
}
/**
 * @class ConditionalFormatDuplicate
 * @classdesc Represents a Duplicate/Unique conditional format.
 * @extends ConditionalFormat
 * @property {boolean} invert - Inverts the conditional format.
 * @property {Format} [format] - The format for the average value.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatDuplicate extends ConditionalFormat {
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
 * @class ConditionalFormatError
 * @classdesc Represents an Error style conditional format.
 * @extends ConditionalFormat
 * @property {boolean} invert - Inverts the conditional format.
 * @property {Format} [format] - The format for the average value.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatError extends ConditionalFormat {
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
     * Sets the format
     * @param {Format} format
     */
    setFormat(format: Format): void;
    /**
     * Sets the invert flag
     * @param {boolean} invert
     */
    setInvert(invert: boolean): void;
}
/**
 * @class ConditionalFormatFormula
 * @classdesc Represents a Formula style conditional format.
 * @extends ConditionalFormat
 * @property {Formula} [formula] - The formula(non-dynamic) for the conditional format.
 * @property {Format} [format] - The format for the average value.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatFormula extends ConditionalFormat {
    /**
     * @param {Object} [options] - The options object
     * @param {Formula} [options.formula] - The formula(non-dynamic) for the conditional format.
     * @param {Format} [options.format] - The format for the average value.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options?: {
        formula?: Formula;
        format?: Format;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {Formula|undefined}
     * @default undefined
     */
    formula: Formula | undefined;
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @param {Formula} formula
     */
    setFormula(formula: Formula): void;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
}
/**
 * @class ConditionalFormatCustomIcon
 * @classdesc Represents an icon in an Icon Set style conditional format
 * @property {boolean} [greaterThan = false] - Set the rule to be “greater than” instead of the Excel default of “greater than or equal to”.
 * @property {ConditionalFormatTypeRule} iconRule - The rule for the icon.
 * @property {boolean} [noIcon = false] - Turn off the icon in the cell.
 * @property {ConditionalFormatIconType} [iconType] - The type of icon.
 * @property {number} [iconTypeIndex] - Index to the icon within the type.
 */
export class ConditionalFormatCustomIcon {
    /**
     * @param {Object} options - The options object
     * @param {ConditionalFormatTypeRule} options.iconRule - The rule for the icon.
     * @param {boolean} [options.greaterThan] - Set the rule to be “greater than” instead of the Excel default of “greater than or equal to”.
     * @param {boolean} [options.noIcon] - Turn off the icon in the cell.
     * @param {Object} [options.iconType] - The type of icon.
     * @param {number} options.iconType.index
     * @param {ConditionalFormatIconType} options.iconType.type - The rule for the icon.
     */
    constructor(options: {
        iconRule: ConditionalFormatTypeRule;
        greaterThan?: boolean;
        noIcon?: boolean;
        iconType?: {
            index: number;
            type: ConditionalFormatIconType;
        };
    });
    /**
     * @type {boolean}
     * @default false
     */
    greaterThan: boolean;
    /**
     * @type {boolean}
     * @default false
     */
    noIcon: boolean;
    /**
     * @type {ConditionalFormatIconType|undefined}
     * @default undefined
     */
    iconType: ConditionalFormatIconType | undefined;
    /**
     * @type {number|undefined}
     * @default undefined
     */
    iconTypeIndex: number | undefined;
    /**
     * @type {ConditionalFormatTypeRule}
     */
    iconRule: ConditionalFormatTypeRule;
    /**
     * @param {boolean} greaterThan
     */
    setGreaterThan(greaterThan: boolean): void;
    /**
     * @param {boolean} noIcon
     */
    setNoIcon(noIcon: boolean): void;
    /**
     * @param {ConditionalFormatIconType} iconType
     * @param {number} index
     */
    setIconType(iconType: ConditionalFormatIconType, index: number): void;
}
/**
 * @class ConditionalFormatIconSet
 * @classdesc Represents a Icon Set style conditional format.
 * @extends ConditionalFormat
 * @property {boolean} [reverse=false] - Reverse the order of icons from lowest to highest.
 * @property {boolean} [showIconsOnly=false] - Show only the icons and not the data in the cells.
 * @property {ConditionalFormatCustomIcon[]} icons - The icons for the set.
 * @property {ConditionalFormatIconType} iconType - The type of icon set.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatIconSet extends ConditionalFormat {
    /**
     * @param {Object} options - The options object
     * @param {ConditionalFormatCustomIcon[]} options.icons - The icons for the set.
     * @param {ConditionalFormatIconType} options.iconType - The type of icon set.
     * @param {boolean} [options.reverse] - Reverse the order of icons from lowest to highest.
     * @param {boolean} [options.showIconsOnly] - Show only the icons and not the data in the cells.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     * @throws {Error} When the number of icons does not match the expected number for the icon type.
     */
    constructor(options: {
        icons: ConditionalFormatCustomIcon[];
        iconType: ConditionalFormatIconType;
        reverse?: boolean;
        showIconsOnly?: boolean;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {boolean}
     * @default false
     */
    reverse: boolean;
    /**
     * @type {boolean}
     * @default false
     */
    showIconsOnly: boolean;
    /**
     * @type {ConditionalFormatCustomIcon[]}
     */
    icons: ConditionalFormatCustomIcon[];
    /**
     * @type {ConditionalFormatIconType}
     */
    iconType: ConditionalFormatIconType;
    /**
     * @param {boolean} reverse
     */
    setReverse(reverse: boolean): void;
    /**
     * @param {boolean} showIconsOnly
     */
    setShowIconsOnly(showIconsOnly: boolean): void;
    /**
     * @param {ConditionalFormatIconType} iconType
     * @param {ConditionalFormatCustomIcon[]} icons
     * @throws {Error} When the number of icons does not match the expected number for the icon type.
     */
    setIcons(iconType: ConditionalFormatIconType, icons: ConditionalFormatCustomIcon[]): void;
}
/**
 * @class ConditionalFormatText
 * @classdesc Represents a Text style conditional format.
 * @extends ConditionalFormat
 * @property {ConditionalFormatTextRule} rule - The rule for the text.
 * @property {Format} [format] - The format for the text.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatText extends ConditionalFormat {
    /**
     * @param {Object} options - The options object
     * @param {ConditionalFormatTextRule} options.rule - The rule for the text.
     * @param {Format} [options.format] - The format for the text.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options: {
        rule: ConditionalFormatTextRule;
        format?: Format;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {ConditionalFormatTextRule}
     */
    rule: ConditionalFormatTextRule;
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @param {ConditionalFormatTextRule} rule
     */
    setRule(rule: ConditionalFormatTextRule): void;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
}
/**
 * @class ConditionalFormatTop
 * @classdesc Represents a Top style conditional format.
 * @extends ConditionalFormat
 * @property {ConditionalFormatTopRule} rule - The rule for the top values.
 * @property {Format} [format] - The format for the top values.
 * @property {string} [multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
 * @property {boolean} [stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
 */
export class ConditionalFormatTop extends ConditionalFormat {
    /**
     * @param {Object} options - The options object
     * @param {ConditionalFormatTopRule} options.rule - The rule for the top values.
     * @param {Format} [options.format] - The format for the top values.
     * @param {string} [options.multiRange] - Is used to extend a conditional format over non-contiguous ranges like "B3:D6 I3:K6 B9:D12 I9:K12"
     * @param {boolean} [options.stopIfTrue] - Is used to set the “Stop if true” feature of a conditional formatting rule when more than one rule is applied to a cell or a range of cells. When this parameter is set then subsequent rules are not evaluated if the current rule is true.
     */
    constructor(options: {
        rule: ConditionalFormatTopRule;
        format?: Format;
        multiRange?: string;
        stopIfTrue?: boolean;
    });
    /**
     * @type {ConditionalFormatTopRule}
     */
    rule: ConditionalFormatTopRule;
    /**
     * @type {Format|undefined}
     * @default undefined
     */
    format: Format | undefined;
    /**
     * @param {ConditionalFormatTopRule} rule
     */
    setRule(rule: ConditionalFormatTopRule): void;
    /**
     * @param {Format} format
     */
    setFormat(format: Format): void;
}
import Color = require("./color");
import Format = require("./format");
import Formula = require("./formula");
//# sourceMappingURL=conditional_format.d.ts.map