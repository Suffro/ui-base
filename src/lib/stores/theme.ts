import type { DaisyUIThemes } from "$lib/types";
import { writable, type Writable } from "svelte/store";


const theme: Writable<DaisyUIThemes> = writable();

export default theme;