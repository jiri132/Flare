/**
 * If a value is left open it will automatically be filled by the standard theme
 * 
 * @example
 * ```ts
 * dark.primary = undefined
 * // components will use base styling 
 * ```
 */
export interface theme {
    // Primary colors of application
    primary : string,
    primary_light? : string,
    primary_dark? : string,

    // Secondary colors of application
    secondary : string,
    secondary_light? : string,
    secondary_dark? : string,

    SideBar: {
        text_color: string, 
        hover_color: string,
        header_color: string,
        standard_color: string,
        
        /**
         * These stylings are not yet implemented but will be getting used as the application progresses
         */
        viewing_file_color?: string,


    },

    RootView: {
        standard_color: string,
        
        /**
         * These things are not used in the styling but will be getting used in the styling eventually as we progress
         */
        highlighted_line_color?: string,
        active_file_indicator?: string, // not in use yet don't bother this one
        
    }

}


/**
 * This compiled just 1 color variable to CSS code to implement in the 
 * 
 * @param C a string that is the color information
 * 
 * @returns a CSS rule string
 */
function CompileColor(C : string) : string {
    return "";
}

/**
 * This compiled the whole given theme in T and outputs the full CSS code 
 * 
 * @param T The whole theme that is used
 * 
 * @returns the full CSS styling needed for the theme to apply
 */
function CompileTheme(T : theme) : string {
    return "";
}
