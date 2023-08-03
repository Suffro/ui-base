

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a4d6da45.js","_app/immutable/chunks/scheduler.b1a79d81.js","_app/immutable/chunks/index.a519e2c0.js","_app/immutable/chunks/singletons.abcc4f62.js","_app/immutable/chunks/index.9b65769f.js"];
export const stylesheets = [];
export const fonts = [];
