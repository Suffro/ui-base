const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();
  if (session) {
    const { data: profile } = await supabase.from("profiles").select(`username, full_name, website, avatar_url`).eq("id", session.user.id).single();
    return { session, profile };
  } else {
    const profile = null;
    return { session, profile };
  }
};
export {
  load
};
