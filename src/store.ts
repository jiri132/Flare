import { writable, type Writable } from "svelte/store";


export const Content : Writable<string> = writable("");


import type { theme } from "./themes/theme.interface";
import { dark } from "./themes/dark.theme";

export const ActiveTheme : Writable<theme> = writable(dark);
