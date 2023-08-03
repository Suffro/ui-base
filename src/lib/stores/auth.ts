import { writable, type Writable } from "svelte/store";

export const authSession: Writable<(null|{
    session: object,
    profile: {
        username: string,
        full_name: string,
        website: string,
        avatar_ur: string
    },
    supabase: any
})> =  writable(null);

