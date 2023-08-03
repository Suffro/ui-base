// src/routes/+layout.server.ts
// import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()

/*     if (!session) {
        throw redirect(303, '/')
    } */

    if(session){
        const { data: profile } = await supabase
            .from('profiles')
            .select(`username, full_name, website, avatar_url`)
            .eq('id', session.user.id)
            .single()
        return { session, profile }
    }else{
        const profile = null;
        return { session, profile }
    }
}