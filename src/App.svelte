<script lang="ts">
  import "./app.css";
  import Router from "svelte-spa-router";
  import { onMount } from "svelte";
  import Home from "./pages/Home.svelte";
  import Nav from "./lib/Nav.svelte";
  const routes = {
    "/": Home,
  };

  onMount(async () => {});
</script>

<div class="container">
  <Nav />
  <Router {routes} />
</div>

<style>
  .container {
    max-width: 100vw;
    height: 100svh;
  }
</style>
