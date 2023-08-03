<script lang="ts">
	import { user } from "$lib/stores/auth";
	
    let showDropdown: boolean = false;

</script>

<!-- Profile dropdown -->
{#if $user || true}
    <div class="relative">
        <button on:click={()=>showDropdown=!showDropdown} type="button" class="-m-1.5 flex items-center p-1.5" id="user-menu-button" aria-expanded="{showDropdown}" aria-haspopup="true">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full bg-base-100" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <span class="hidden lg:flex lg:items-center">
            <span class="ml-4 text-sm font-semibold leading-6 text-base-content" aria-hidden="true">{$user?.full_name || ""}</span>
            <svg class="ml-2 h-5 w-5 text-base-content" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
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
            <div class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-base-200 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-base-100", Not Active: "" -->
                <a href="#" class="block px-3 py-1 text-sm leading-6 text-base-content" role="menuitem" tabindex="-1" id="user-menu-item-0">Your profile</a>
                <a href="#" class="block px-3 py-1 text-sm leading-6 text-base-content" role="menuitem" tabindex="-1" id="user-menu-item-1">Sign out</a>
            </div>
        {/if}
    </div>
{/if}