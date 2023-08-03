

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7bad3703.js","_app/immutable/chunks/scheduler.b1a79d81.js","_app/immutable/chunks/index.a519e2c0.js","_app/immutable/chunks/auth.e657d948.js","_app/immutable/chunks/index.9b65769f.js"];
export const stylesheets = [];
export const fonts = [];
