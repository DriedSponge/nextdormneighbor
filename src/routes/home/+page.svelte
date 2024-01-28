<script>
    import Input from "$lib/Input.svelte";
    import loggedIn, {user} from "$lib/auth.js";
    import {login, logout} from "$lib/auth.js";

    let searchQuery = '';

    function handleSearch() {
        console.log('Searching for:', searchQuery);
    }
</script>





<h1 class="text-center text-2xl font-bold mb-4">Home</h1>
{#if !$user.loggedIn}
    <div class="max-w-xl mx-auto">
        <div>
            <input class="" type="text" bind:value={searchQuery} placeholder="Search..." on:keyup={event => event.key === 'Enter' && handleSearch()}>
            <button on:click={handleSearch}>Search</button>
        </div>
        <div>
            <p class="flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl">
                Today Events:
            </p>
            <p class="flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl">
                Upcoming:
            </p>
            <p class="padded-div flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl">
                Hansee Hall:
            </p>
            <p class="padded-div flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl">
                Clubs:
            </p>
        </div>
    </div>
    {:else }
    <button on:click={logout}>Logout</button>
{/if}
<style lang="postcss">
    :root {
        --padding-size: 15px;
    }

    .padded-div {
        padding: var(--padding-size);
    }
</style>