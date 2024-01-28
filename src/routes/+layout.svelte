<script>
    import "../app.css";
    import loggedIn from "$lib/auth.js";
    import {user} from "$lib/auth.js";
    loggedIn();
</script>
<svelte:head>
    <title>Nextdorm Neighbor</title>
    <meta name="description" content="A web service for connecting to your dorm communities!">
</svelte:head>
<div class="h-screen flex flex-col ">
    {#if $user.loggedIn}
    <nav class="dark:bg-gray-700">
        <div class="mx-auto p-4">
            <ul class="flex md:space-x-8 md:flex-row md:border-0">
                <li>
                    <a href="/" class="text-white">Home</a>
                </li>
                <li>
                    <a href="/profile" class="text-white">Profile</a>
                </li>
                <li>
                    <a href="#" class="text-white">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    {/if}
    <main class="mx-auto container flex-1">
        <slot></slot>
    </main>
    <footer class="dark:bg-gray-700">
        <div class="mx-auto max-w-screen-xl p-4 md:flex md:justify-between">
        <span class="dark:text-gray-100 italic">Group 60 WINFO Hackathon: Jordan Tucker, David Pham, Harman Zhang.
        </span>
            <ul class="dark:text-gray-100">
                <li>
                    <a href="https://github.com/DriedSponge/nextdormneighbor" class="hover:underline">Source Code</a>
                </li>
            </ul>
        </div>
    </footer>
</div>

