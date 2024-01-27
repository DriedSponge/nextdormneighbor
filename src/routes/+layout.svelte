<script>
    import "../app.css";
    import loggedIn from "$lib/auth.js";

    loggedIn();
</script>
<main class="mx-auto container">
        <slot></slot>
</main>
