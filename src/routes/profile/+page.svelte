<script>
    import Input from "$lib/Input.svelte";
    import loggedIn, {user} from "$lib/auth.js";
    import {login, logout} from "$lib/auth.js";
    let email;
</script>

<h1 class="text-center text-2xl font-bold mb-4">Profile</h1>
{#if $user.loggedIn}
    <div class="max-w-xl mx-auto">
        <div>
            <form class="flex flex-col space-y-5 bg-gray-200 p-8 rounded-2xl">
                <form>
                    <label>
                        <span class="block">Email</span>
                        <input class:invalid={errors["email"]} name="email"
                               on:focusout={(e)=>{validateField('email',{email:e.target?.value})}} class="input"
                               bind:value={email}>
                        {#if errors["email"]}
                            <span class="text-red-500">{errors["email"]}</span>
                        {/if}
                    </label>
                    <button class="bg-gray-500 transition-colors ease-in-out duration-200 hover:bg-gray-400 text-white p-3 rounded-xl"
                            type="submit">Save
                    </button>
                    <hr class="border-black">
                </form>
                <button disabled class="bg-purple-600 text-white p-3 rounded-xl flex flex-row items-center space-x-4 justify-center">
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