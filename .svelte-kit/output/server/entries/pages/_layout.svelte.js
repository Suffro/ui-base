import { c as create_ssr_component, s as setContext } from "../../chunks/ssr.js";
import { u as user } from "../../chunks/auth.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { supabase, session, profile } = data;
  setContext("user", user);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ supabase, session, profile } = data);
  {
    user.set(profile);
  }
  return `  ${$$result.head += `<!-- HEAD_svelte-1hgwsyy_START -->${$$result.title = `<title>User Management</title>`, ""}<!-- HEAD_svelte-1hgwsyy_END -->`, ""} <div class="container" style="padding: 50px 0 100px 0">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
