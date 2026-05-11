<script lang="ts">
	let { children, ...otherProps } = $props();
</script>

<style lang="scss">
    p {
        margin: 0;
    }
    .h1 {
        font-size: 64px;
    }
    .h2 {
        font-size: 48px;
    }
    .h3 {
        font-size: 36px;
    }

    .tag {
        background-color: $color-secondary-dark;
        padding: 4px 8px;
        border-radius: 999px;
        font-size: 10px;
        text-transform: uppercase;
        line-height: 16px;
    }
</style>

<p {...otherProps}>
    {@render children()}
</p>