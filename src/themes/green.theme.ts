import type { theme } from "./theme.interface";

export const green : theme = {
    primary: "#1ecc7b",
    secondary: "#4ce69e",
    SideBar: {
        text_color: "#000",
        // hover_color: "rgba(0,0,0,0.3)",
        header_color: "#1ecc7b",
        standard_color: "#4ce69e",
        viewing_file_color: undefined
    },
    RootView: {
        standard_color: "#0ea5e9",
        highlighted_line_color: undefined,
        active_file_indicator: undefined
    }
}