import { writable, type Writable } from "svelte/store";

export const user: Writable<(null|{
    username: string,
    full_name: string,
    website: string,
    avatar_ur: string
})> =  writable(null);

