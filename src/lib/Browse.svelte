<script>
    import {onMount} from "svelte";
    import {logout} from "./auth.js"

    /**
     * @type string
     */
    let currentPage = "Home"

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
        await scramble();
    })

    /**
     * Randomize data to make it look like a fresh page
     */
    async function scramble() {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await data.json()
        let userData = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await userData.json();
        let albumData = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        albums = await albumData.json();
        posts = posts.sort(() => Math.random() - 0.5);

    }

    /**
     * Sets the current page
     * @param {string} page
     */
    function setPage(page) {
        currentPage = page;
    }
</script>
<div class="flex flex-col space-y-4 items-center max-w-3xl mx-auto">
    <div class="w-full flex flex-row space-x-3">
        <a href="#" on:click={()=>{setPage("Home");scramble()}} class="navBtn active"
           class:active={currentPage==="Home"}>Home</a>
        <a href="#" on:click={()=>{setPage("People");scramble()}} class="navBtn" class:active={currentPage==="People"}>People</a>
        <a href="#" on:click={()=>{setPage("News");scramble()}} class="navBtn"
           class:active={currentPage==="News"}>News</a>
        <a href="#" on:click={()=>{setPage("Events");scramble()}} class="navBtn" class:active={currentPage==="Events"}>Events</a>
        <a href="#" class="navBtn" on:click={()=>{logout()}}>Logout</a>
    </div>
    {#if currentPage === "People"}
        {#each users as user}
            <div class="bg-gray-200 shadow-2xl flex flex-row items-center w-full rounded-xl overflow-hidden">
            <img alt={user.name+' image'} class="w-24 h-24" src="https://thispersondoesnotexist.com/">
                <p class="w-full text-center">{user.name} &bull; {user.email}  &bull; Willow Hall - Room {Math.floor(Math.random()*600)} </p>
            </div>
        {/each}
    {:else }
        {#each posts as post}
            <div>
                <div class="bg-gray-200 w-full p-4 space-y-2 rounded-t-lg">
                    <header>
                        <h1 class="font-bold">{post.title}</h1>
                        {#if users[post.userId]}
                            <h2 class="text-gray-500">Posted By {users[post.userId]["name"]} from Willow Hall</h2>
                            {#if currentPage === "Events"}
                                <h3 class="text-gray-500">Happening On {Math.floor(Math.random() * 3) + 1}
                                    /{Math.floor(Math.random() * 29)}/2024</h3>
                            {/if}
                        {/if}
                    </header>
                    <hr class="border-2 border-black">
                    <div>
                        <p>
                            {post.body}
                        </p>
                    </div>

                </div>
                <div class="bg-gray-400 overflow-hidden rounded-b-lg">
                    {#if albums[0]}
                        <img alt="Post" class="w-96 mx-auto"
                             src="{albums[Math.floor(Math.random()* albums.length)].url}">
                    {/if}
                </div>
            </div>
        {/each}
    {/if}

</div>
<style lang="postcss">
    .navBtn {
        @apply w-full bg-gray-200 p-4 rounded-lg text-center hover:bg-gray-300 transition-colors duration-200 ease-in-out;
    }

    .navBtn.active {
        @apply bg-gray-300 pointer-events-none;
    }
</style>