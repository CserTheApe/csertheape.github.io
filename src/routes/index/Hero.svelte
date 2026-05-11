<script lang="ts">
    import Text from '$lib/components/Text.svelte';
    import logo from '$lib/assets/logo.png';
</script>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        min-height: 100svh;
    }

    img {
        border-radius: 100%;
        border: 8px solid $color-primary;
        width: 200px;
        aspect-ratio: 1;
        margin: 0 auto;
    }
</style>

<section>
    <img src={logo} alt="logo" />
    <Text class="h1" style="margin-top: 32px;">CserTheApe</Text>
    <Text style="margin-top: 40px;">sick moondust creates zest</Text>
</section>