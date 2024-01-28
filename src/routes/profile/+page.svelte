<script>
    import {logout, user} from "$lib/auth.js";
    import {object, string} from "yup";
    import {goto} from "$app/navigation";

    /**
     * @type any
     */
    let errors = [];
    /**
     * @type string
     */
    let email = $user.email;
    /**
     * @type string
     */
    let pageError = "";
    /**
     * @type string
     */
    let name = $user.name;

    /**
     * Schema used for validating settings
     */
    const settingsSchema = object({
        email: string().required("Please enter your email!").email("You must enter a valid email!").max(50),
        name: string().required("Please enter your name!").max(50, "Your name must be less than 50 letters!"),
    })

    /**
     * Validate individual fields against the schema.
     * @param {string} field
     * @param {any} value
     */
    function validateField(field, value) {
        try {
            settingsSchema.validateSyncAt(field, value);
            if (errors[field]) {
                errors[field] = "";
                delete (errors[field]);
            }
        } catch (e) {
            errors[field] = e?.errors[0];
        }
    }

    /**
     * Save the settings to storage.
     * @param {any} event
     */
    function saveSettings(event) {
        try {
            settingsSchema.validate({email: email, name: name})
            let updatedUser = {name,email,loggedIn:true};
            localStorage.setItem("session",JSON.stringify(updatedUser));
            user.set(updatedUser);
        } catch (e) {
            pageError = "You still have some errors to fix on the page!"
        }


    }
</script>

{#if $user.loggedIn}
    <h1 class="text-center text-2xl font-bold mb-4">Profile - {$user.name}</h1>
    <div class="max-w-xl mx-auto">
        <div class="space-y-3">
            {#if pageError}
                <div class="bg-red-500 text-white p-3 rounded-xl">
                    {pageError}
                </div>
            {/if}
            <form class="flex flex-col space-y-5 bg-gray-200 p-8 rounded-2xl"
                  on:submit|preventDefault={(e)=>{saveSettings(e)}}>
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
                    <span class="block">Name</span>
                    <input class:invalid={errors["name"]} name="name"
                           on:focusout={(e)=>{validateField('name',{name:e.target?.value})}} class="input"
                           bind:value={name}>
                    {#if errors["name"]}
                        <span class="text-red-500">{errors["name"]}</span>
                    {/if}
                </label>
                <button class="w-full bg-gray-500 transition-colors ease-in-out duration-200 hover:bg-gray-400 text-white p-3 rounded-xl"
                        type="submit">Save
                </button>
                <hr class="border-black">
                <button disabled
                        class="bg-purple-600 text-white p-3 rounded-xl flex flex-row items-center space-x-4 justify-center">
                    <img alt="University of Washington Block W Logo" class="w-12"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Washington_Huskies_logo.svg/1200px-Washington_Huskies_logo.svg.png">
                    <span class="block font-bold">
                        UW Net ID Login Verified
                    </span>
                </button>
            </form>
        </div>
    </div>
{:else }
    {goto("/")}
{/if}
<style lang="postcss">
    .input {
        @apply w-full p-2 rounded focus:outline-none border-0;
    }

    .input.invalid {
        @apply border-2 border-red-500;
    }
</style>