<script>
    import {onMount} from "svelte";
    import {logout} from "./auth.js"

    /**
     * @type any
     */
    let posts = [];
    /**
     * @type any
     */
    let users = [];
    /**
     * @type any
     */
    let albums = [];
    onMount(async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await data.json()
        let userData = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await userData.json();
        let albumData = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        albums = await albumData.json();
    })
</script>
<div class="flex flex-col space-y-4 items-center max-w-3xl mx-auto">
    <div class="w-full flex flex-row">
        <button class="w-full bg-gray-200 p-4">Home</button>
        <button class="w-full bg-gray-200 p-4">People</button>
        <button class="w-full bg-gray-200 p-4">News</button>
        <button class="w-full bg-gray-200 p-4">Events</button>
        <button class="w-full bg-gray-200 p-4" on:click={()=>{logout()}}>Logout</button>
    </div>
    {#each posts as post}
        <div class=" rounded-xl">
            <div class="bg-gray-200 w-full p-4 space-y-2 overflow-clip">
                <header>
                    <h1 class="font-bold">{post.title}</h1>
                    {#if users[post.userId]}
                        <h2 class="text-gray-500">Posted By {users[post.userId]["name"]} from Willow Hall</h2>
                    {/if}
                </header>
                <hr class="border-2 border-black">
                <div>
                    <p>
                        {post.body}
                    </p>
                </div>

            </div>
            <div class="bg-gray-400 overflow-hidden">
                {#if albums[0]}
                    <img class="w-96 mx-auto" src="{albums[Math.floor(Math.random()* albums.length)].url}">
                {/if}
            </div>
        </div>
    {/each}
</div>
