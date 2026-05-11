<script lang="ts">
	import favicon from '$lib/assets/logo.png';

	let { children } = $props();
</script>
	
<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Exo', sans-serif;
		font-weight: 500;
        color: $color-primary;
	}
	
    :global(a) {
        text-decoration: inherit;
        color: inherit;
    }
	
	:global(section) {
		padding: 56px 32px;

		&:nth-child(odd) {
			background-color: $color-secondary;
		}
		&:nth-child(even) {
			background-color: $color-secondary-light;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-color: $color-secondary-light;
		padding: 56px 32px;

		a {
			font-size: 14px;
			line-height: 20px;
			margin-bottom: 16px;
		}

		.caption {
			font-size: 12px;
			line-height: 16px;
		}
	}


</style>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500&display=swap" />
</svelte:head>

{@render children()}

<footer>
	<div>Contact me</div>
	<a href="mailto:csertheape@gmail.com">csertheape@gmail.com</a>
	<div class="caption">&copy; {new Date().getFullYear()} CserTheApe</div>
</footer>