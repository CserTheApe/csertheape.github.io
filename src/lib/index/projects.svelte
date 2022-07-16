<script>
	import Container from '$lib/common/container.svelte';
	import ProjectCard from '$lib/common/project-card.svelte';
	import logo from '$lib/assets/logo.png';

	let projects = [
		{
			name: 'Portfolio',
			link: '',
			logo: logo,
			description: "A record of things I've done",
			tags: ['Sveltekit', 'Tailwind CSS', 'Figma']
		},
		{
			name: 'Quizzical',
			logo: logo,
			description: 'WIP',
			tags: []
		}
	];
</script>

<Container>
	<h2 class="pb-[64px]">Projects</h2>
	<div class="grid md:grid-cols-2 gap-[24px]">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</Container>
