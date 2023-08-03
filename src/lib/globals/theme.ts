import theme from "$lib/stores/theme";
import { DaisyUIThemesList, type DaisyUIThemes } from "$lib/types";
import { get } from "svelte/store";

export const LIGHT_THEME: DaisyUIThemes = "emerald";
export const DARK_THEME: DaisyUIThemes = "forest";

export const LOCAL_STORAGE_KEY = "--theme"

export const loadLocalTheme = (defaultTheme: DaisyUIThemes = LIGHT_THEME) => {
    try {
        const currentTheme: DaisyUIThemes = localStorage.getItem(LOCAL_STORAGE_KEY) as DaisyUIThemes || defaultTheme;
        if(currentTheme && DaisyUIThemesList.includes(currentTheme)) theme.set(currentTheme)
    } catch (error) {
        console.error(error);
        theme.set(defaultTheme)
    }
}

export const updateLocalTheme = (newTheme: DaisyUIThemes) => {
    try {
        const currentTheme: DaisyUIThemes = newTheme||get(theme);
        if(currentTheme) localStorage.setItem(LOCAL_STORAGE_KEY, currentTheme);
    } catch (error) {
        console.error(error);
    }
}

export const initTheme = (defaultTheme: DaisyUIThemes = LIGHT_THEME) => {
    loadLocalTheme(defaultTheme)
    try {
        theme.subscribe((value)=>{
            updateLocalTheme(value);
        })
    } catch (error) {
        theme.set(defaultTheme)
        console.error(error);
    }
}