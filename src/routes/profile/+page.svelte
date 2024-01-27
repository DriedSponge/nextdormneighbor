<script>
    import Input from "$lib/Input.svelte";
    import loggedIn, {user} from "$lib/auth.js";
    import {login, logout} from "$lib/auth.js";

</script>

<h1 class="text-center text-2xl font-bold mb-4">Profile</h1>
{#if !$user.loggedIn}
    <div class="max-w-xl mx-auto">
        <div>
            <form class="flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl">
                <form class="text-xl flex-col">
                    <p class="inline">Profile Picture</p>
                    <button class="bg-purple-600 text-white p-3 rounded-xl items-center space-x-4 justify-center"> Change</button>
                </form>
                <form class="text-xl flex-col">
                    <p class="inline">Username</p>
                    <button class="bg-purple-600 text-white p-3 rounded-xl items-center space-x-4 justify-center"> Change</button>
                </form>

                <form class="text-xl flex-col">
                    <p class="inline">Email:</p>
                    <button class="bg-purple-600 text-white p-3 rounded-xl items-center space-x-4 justify-center"> Change</button>
                </form>

                <form class="text-xl flex-col">
                    <p class="inline">Display Name:</p>
                    <button class="bg-purple-600 text-white p-3 rounded-xl items-center space-x-4 justify-center"> Change</button>
                </form>

                <form class="text-xl flex-col">
                    <p class="inline">Password:</p>
                    <button class="bg-purple-600 text-white p-3 rounded-xl items-center space-x-4 justify-center"> Change</button>
                </form>

                <button class="bg-purple-600 text-white p-3 rounded-xl flex flex-row items-center space-x-4 justify-center">
                    <img alt="University of Washington Block W Logo" class="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Washington_Huskies_logo.svg/1200px-Washington_Huskies_logo.svg.png">
                    <span class="block font-bold">
                        UW Net ID Login Verified
                    </span>
                </button>
            </form>
        </div>
    </div>
    {:else }
    <button on:click={logout}>Logout</button>
{/if}
<style lang="postcss">
    .input{
        @apply w-full p-2 rounded focus:outline-none border-0;
    }
</style>