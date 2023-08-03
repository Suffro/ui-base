import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { u as user } from "../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h1 class="text-3xl font-bold">${escape($user ? "Logged in" : "Logged out")}</h1>`;
});
export {
  Page as default
};
