import { writable, type Writable } from "svelte/store";

export const Content : Writable<string> = writable("");
