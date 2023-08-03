<script lang="ts">
	import { authSession } from '$lib/stores/auth';

	let showDropdown: boolean = false;
</script>

<!-- Profile dropdown -->
{#if $authSession}
	<div class="relative">
		<button
			on:click={() => (showDropdown = !showDropdown)}
			type="button"
			class="-m-1.5 flex items-center p-1.5"
			id="user-menu-button"
			aria-expanded={showDropdown}
			aria-haspopup="true"
		>
			<span class="sr-only">Open user menu</span>
			{#if $authSession?.profile?.avatar_ur}
				<img
					class="h-8 w-8 rounded-full border outline-0 ring-0"
					src={$authSession?.profile?.avatar_ur || ''}
					alt=""
				/>
			{:else}
				<div class="h-8 w-8 bg-base-100 rounded-full flex items-center justify-center border">
					{$authSession?.session?.user?.email[0]?.toUpperCase() || ''}
				</div>
			{/if}
			<span class="hidden lg:flex lg:items-center">
				<span class="ml-4 text-sm font-semibold leading-6 text-base-content" aria-hidden="true"
					>{$authSession?.profile?.full_name || ''}</span
				>
				{#if showDropdown}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				{/if}
			</span>
		</button>

		<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
		{#if showDropdown}
			<div
				class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-base-200 border py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu-button"
				tabindex="-1"
			>
				<!-- Active: "bg-base-100", Not Active: "" -->
				<a
					href="/account"
					class="block px-3 py-1 text-sm leading-6 text-base-content"
					role="menuitem"
					tabindex="-1"
					id="user-menu-item-0">Your account</a
				>
				<button
					on:click={async () => {
                        try {
                            const { error } = await $authSession?.supabase.auth.signOut();
                            if(error) console.error(error);
                            else authSession.set(null);
                        } catch (error) {
                            console.error(error);
                        } finally {
                            showDropdown = false;
                        }
                    }}
					class="block px-3 py-1 text-sm leading-6 text-base-content"
					role="menuitem"
					tabindex="-1"
					id="user-menu-item-1"
				>
					Sign out
				</button>
			</div>
		{/if}
	</div>
{:else}
	<div class="relative">
		<a href="/access">
			<button class="btn btn-sm btn-primary">Login</button>
		</a>
	</div>
{/if}
