import * as server from '../entries/pages/access/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/access/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/access/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.d94e00ea.js","_app/immutable/chunks/scheduler.b1a79d81.js","_app/immutable/chunks/index.a519e2c0.js"];
export const stylesheets = ["_app/immutable/assets/3.0a15a45c.css"];
export const fonts = [];
