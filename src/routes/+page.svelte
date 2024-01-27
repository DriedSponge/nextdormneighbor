<script>
    import Input from "$lib/Input.svelte";
    import loggedIn, {user} from "$lib/auth.js";
    import {login, logout} from "$lib/auth.js";

    /**
     * @type string
     */
    let email;

    /**
     * Login the user
     * @param {Event} event
     */
    function authenticate(event){
        console.log(event.target.reset())
        //login(email)
    }
</script>

<h1 class="text-center text-2xl font-bold mb-4">Welcome To Next Dorm Neighbor</h1>
{#if !$user.loggedIn}
    <div class="max-w-xl mx-auto">
        <div>
            <form class="flex flex-col space-y-5 bg-gray-400 p-8 rounded-2xl" on:submit|preventDefault={(e)=>{authenticate(e)}}>
                <h2 class="text-center text-xl">Login</h2>
                <label>
                    <span class="block">Email</span>
                    <input class="input" bind:value={email}>
                </label>
                <label>
                    <span class="block">Password</span>
                    <input class="input" type="password">
                </label>
                <button class="bg-blue-500 text-white p-3 rounded-xl" type="submit">Login</button>
                <hr>
                <button class="bg-purple-600 text-white p-3 rounded-xl flex flex-row items-center space-x-4 justify-center">
                    <img alt="University of Washington Block W Logo" class="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Washington_Huskies_logo.svg/1200px-Washington_Huskies_logo.svg.png">
                    <span class="block font-bold">
                        UW Net ID Login
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