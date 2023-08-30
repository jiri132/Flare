import type { ColorCodes } from "../Styling/type.ColorCodes";
import type { TRBL } from "../Styling/type.TRBL";

export type StandardObjectStyling = { 
    width?: number | string;
    height?: number | string;
    editable?: boolean;
    backgroundColor?: ColorCodes;
    color?: ColorCodes;
    padding?: number | TRBL;
    margin?: number | TRBL;
    border?: {
        color: ColorCodes;
        size: number;  
        type?: "solid" | "dotted"
    };
    borderRadius?: number | TRBL;
}