import * as server from '../entries/pages/account/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/account/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.ad232a2c.js","_app/immutable/chunks/scheduler.b1a79d81.js","_app/immutable/chunks/index.a519e2c0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.abcc4f62.js","_app/immutable/chunks/index.9b65769f.js","_app/immutable/chunks/navigation.64a0befd.js"];
export const stylesheets = [];
export const fonts = [];
