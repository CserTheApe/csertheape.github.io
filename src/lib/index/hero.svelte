<script>
	import Container from '$lib/common/container.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<Container>
	<div
		class="text-center flex flex-col justify-center h-[calc(100vh-112px)] md:h-[calc(100vh-144px)]"
	>
		<img
			class="rounded-full mx-auto w-[200px] aspect-square border-4 md:border-8 border-inherit"
			src={logo}
			alt="logo"
		/>
		<h1 class="mt-[32px]">Josin's Portfolio</h1>
		<div class="subtitle-1 mt-[40px]">Pretend I wrote something clever here</div>
	</div>
</Container>
