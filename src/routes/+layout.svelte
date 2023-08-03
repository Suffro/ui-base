<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css'
	import { invalidate } from '$app/navigation'
	import { onMount, setContext } from 'svelte'
	import { authSession } from '$lib/stores/auth';
	import Shell from '$lib/components/shell/shell.svelte';
	import { initTheme } from '$lib/globals/theme';
	import theme from '$lib/stores/theme';

	export let data

	let { supabase, session, profile } = data
	$: ({ supabase, session, profile } = data)
	$: authSession.set({session:session||{},profile:profile||{},supabase});
	onMount(() => {
		initTheme();
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})
		console.log($authSession);
		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>
<div data-theme={$theme} class="h-screen w-screen p-0 m-0">
	<Shell>
		<slot />
	</Shell>
</div>