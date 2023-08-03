import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.c80f3311.js","_app/immutable/chunks/singletons.abcc4f62.js","_app/immutable/chunks/index.9b65769f.js","_app/immutable/chunks/scheduler.b1a79d81.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.a519e2c0.js","_app/immutable/chunks/navigation.64a0befd.js","_app/immutable/chunks/auth.e657d948.js"];
export const stylesheets = ["_app/immutable/assets/0.c8717582.css"];
export const fonts = [];
