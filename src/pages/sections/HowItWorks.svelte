<script lang="ts">
    import HowItWorks from "../../assets/how-works-desktop.png";
</script>

<div class="container">
    <h1 style="color: var(--background);">How it Works</h1>
    <img src={HowItWorks} alt="" />
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
        width: 100vw;
        padding-block: 2rem;
        background: var(--text);
        box-sizing: border-box;
        overflow-y: auto;
    }
</style>
