<script>
	export let alternate = false;
	export let dark = false;

	let backColor = 'bg-secondary';
	if (dark && alternate) backColor = 'bg-primary-dark';
	else if (dark) backColor = 'bg-primary';
	else if (alternate) backColor = 'bg-secondary-light';
</script>

<section class={`${backColor} py-[56px] md:py-[72px] px-[32px] md:px-[48px]`}>
	<slot />
</section>
