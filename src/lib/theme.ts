export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "polcinak-theme";
export const DEFAULT_THEME: Theme = "dark";

// Runs inline in <head> before first paint so a stored light preference
// never flashes dark.
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
