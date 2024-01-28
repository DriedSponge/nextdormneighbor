<script>
    import "../app.css";
    import loggedIn from "$lib/auth.js";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';

    loggedIn();
</script>

<nav class="dark:bg-gray-700">
    <div class="mx-auto p-4">
        <ul class="flex md:space-x-8 md:flex-row md:border-0">
          <li>
            <a href="#" class="text-white">Home</a>
          </li>
          <li>
            <a href="#" class="text-white">Profile</a>
          </li>
          <li>
            <a href="#" class="text-white">Contact</a>
          </li>
        </ul>
    </div>
</nav>



<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

<main class="mx-auto container">
        <slot></slot>
</main>
