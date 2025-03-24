<script lang="ts">
  import { link } from "svelte-spa-router";
  import logo from "../assets/ipick-Logo.png";
  import { ChevronDown, ChevronUp, Menu, UserPlus } from "lucide-svelte";
  import { slide } from "svelte/transition";
  let showDropdown = $state(false);
  let screenWidth = $state(window.innerWidth);
</script>

<svelte:window bind:innerWidth={screenWidth} />
<header>
  <img src={logo} alt="" />
  {#if screenWidth > 768}
    <nav>
      <a href="/" use:link>Home</a>
      <button
        onclick={() =>
          showDropdown ? (showDropdown = false) : (showDropdown = true)}
        >Services
        {#if showDropdown}
          <ChevronUp size="20" />
        {:else}
          <ChevronDown size="20" />
        {/if}
      </button>
    </nav>

    <a href="https://portal.ipick.ph/index" class="cta" target="_blank"
      ><UserPlus size="20" /> Be our Partner</a
    >
  {:else}
    <button
      onclick={() =>
        showDropdown ? (showDropdown = false) : (showDropdown = true)}
    >
      <Menu size="28" />
    </button>
  {/if}
</header>
{#if showDropdown}
  <div class="dropdown" transition:slide>
    <div class="links">
      <a href="https://portal.ipick.ph/index" target="_blank">Driver Portal</a>
      <a
        href="https://docs.google.com/forms/d/1g1Kl9_t0NovUZ2Bicr3Zj4yKKohdpklivPvSykWdQs8/viewform?edit_requested=true"
        target="_blank">Apply for 20% Discount</a
      >
    </div>
    <div class="policies">
      <a href="https://ipick.ph/privacy-policy" target="_blank"
        >Privacy Policy</a
      >
      <a href="https://ipick.ph/terms-and-conditions" target="_blank"
        >Terms of Services</a
      >
      <a href="https://ipick.ph/cookie-policy" target="_blank"
        >Code of Conduct</a
      >
    </div>
  </div>
{/if}

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem 3rem;
    height: 10vh;
    background-color: var(--background);
    z-index: 2;
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  img {
    width: 100px;
  }
  button,
  a {
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.5rem;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      background-color: var(--text);
      width: 0;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
  }
  .dropdown {
    position: absolute;
    top: 10vh;
    display: flex;
    width: 100vw;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    gap: 5rem;
    padding: 1rem 2rem;
    background-color: var(--background);
  }
  .cta {
    margin-left: auto;
  }
  .links,
  .policies {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    header {
      padding: 1rem 2rem;
      justify-content: space-between;
    }
    a::after,
    button::after {
      display: none;
    }
    .dropdown {
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 2rem;
    }

    button:active {
      transform: scale(0.85);
    }
  }
</style>
