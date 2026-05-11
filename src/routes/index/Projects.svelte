<script lang="ts">
    import Text from '$lib/components/Text.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
    
    import logo from '$lib/assets/logo.png';
    import ffsLogo from '$lib/assets/projects/for-fics-sake/logo.png';
    import vanilaLogo from '$lib/assets/projects/vanilla-cups/logo.png';

    let projects: Project[] = [
		{
			name: 'Portfolio',
			link: '',
			logo: logo,
			description: "This site. It's the homepage to my existence.",
			tags: ['Sveltekit', 'SCSS', 'Figma']
		},
		{
			name: "For Fic's Sake",
			logo: ffsLogo,
			description: 'WIP',
			tags: ['Flutter']
		},
		{
			name: "Vanilla Cups",
            link: "https://vanillacups.infinityfreeapp.com",
			logo: vanilaLogo,
			description: 'A collection of tiny apps made in vanilla Javascript. Includes stuff like a Brainfuck interpreter/debugger.',
			tags: ['JS', "HTML", "CSS"]
		}
	];
</script>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 24px;

        @media screen and (min-width: 800px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>

<section>
    <Text class="h2" style="padding-bottom: 64px">Projects</Text>
	<div class="grid">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>