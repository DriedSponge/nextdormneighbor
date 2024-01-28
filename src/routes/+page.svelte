<script>
    import {login, user} from "$lib/auth.js";
    import {object, string} from 'yup'
    import Browse from "$lib/Browse.svelte";

    /**
     * @type string
     */
    let pageError;

    /**
     * @type string
     */
    let email;

    /**
     *  @type string
     */
    let password;

    /**
     * @type any
     */
    let errors = [];

    /**
     * Login the user
     * @param {Event} event
     * @param {boolean} force
     */
    function authenticate(event, force) {
        try {
            if (force) {
                email = "UWStudent@uw.edu"
            } else {
                loginSchema.validate({email: email, password: password})
                event.target?.reset()
            }
            login(email)
            email = "";
            pageError = ""
            password = ""
        } catch (e) {
            pageError = "You still have some errors to fix on the page!"
        }


    }

    /**
     * Scheme to check if login data is valid.
     */
    const loginSchema = object({
        email: string().required("Please enter your email!").email("You must enter a valid email!").max(50),
        password: string().required("Please enter your password"),
    })

    /**
     * Validate individual fields against the schema.
     * @param {string} field
     * @param {any} value
     */
    function validateField(field, value) {
        try {
            loginSchema.validateSyncAt(field, value);
            if (errors[field]) {
                errors[field] = "";
                delete (errors[field]);
            }
        } catch (e) {
            errors[field] = e?.errors[0];
        }
    }
</script>

{#if !$user.loggedIn}
    <h1 class="text-center text-3xl font-bold my-10">Welcome To Next Dorm Neighbor</h1>

    <div class="max-w-xl mx-auto">
        <div class="space-y-2">
            {#if pageError}
                <div class="bg-red-500 text-white p-3 rounded-xl">
                    {pageError}
                </div>
            {/if}
            <form class="flex flex-col space-y-5 bg-gray-200 p-8 rounded-2xl shadow-xl"
                  on:submit|preventDefault={(e)=>{authenticate(e,false)}}>
                <h2 class="text-center text-2xl font-bold">Login</h2>
                <p class="text-center text-gray-400 italic">This is a demo login. Please use any email or password!</p>
                <label>
                    <span class="block">Email</span>
                    <input class:invalid={errors["email"]} name="email"
                           on:focusout={(e)=>{validateField('email',{email:e.target?.value})}} class="input"
                           bind:value={email}>
                    {#if errors["email"]}
                        <span class="text-red-500">{errors["email"]}</span>
                    {/if}
                </label>
                <label>
                    <span class="block">Password</span>
                    <input class:invalid={errors["password"]}
                           on:focusout={(e)=>{validateField('password',{password:e.target?.value})}} name="password"
                           bind:value={password} class="input" type="password">
                    {#if errors["password"]}
                        <span class="text-red-500">{errors["password"]}</span>
                    {/if}
                </label>
                <button class="bg-gray-500 transition-colors ease-in-out duration-200 hover:bg-gray-400 text-white p-3 rounded-xl"
                        type="submit">Login
                </button>
                <hr class="border-black">
                <button on:click={(event)=>{authenticate(event,true)}}
                        class="bg-purple-500 text-white p-3 rounded-xl flex flex-row items-center space-x-4 justify-center">
                    <img alt="University of Washington Block W Logo" class="w-12"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Washington_Huskies_logo.svg/1200px-Washington_Huskies_logo.svg.png">
                    <span class="block font-bold">
                        UW Net ID Login
                    </span>
                </button>
            </form>
        </div>
    </div>
{:else }
    <h1 class="text-center text-3xl font-bold my-10">Welcome {$user.name}!</h1>
    <Browse></Browse>
{/if}
<style lang="postcss">
    .input {
        @apply w-full p-2 rounded focus:outline-none border-0;
    }

    .input.invalid {
        @apply border-2 border-red-500;
    }
</style>