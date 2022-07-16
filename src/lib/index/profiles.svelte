<script>
	import Container from '$lib/common/container.svelte';
	import ProfileCard from '$lib/common/profile-card.svelte';
	import hackerrankLogo from '$lib/assets/profiles/hackerrank.png';
	import linkedInLogo from '$lib/assets/profiles/linked-in.png';
	import salesforceLogo from '$lib/assets/profiles/salesforce.jpg';

	let profiles = [
		{
			name: 'LinkedIn',
			logo: linkedInLogo,
			link: 'https://www.linkedin.com/in/josin-abraham-31b3a6118/'
		},
		{
			name: 'Hackerrank',
			logo: hackerrankLogo,
			link: 'https://www.hackerrank.com/CserTheApe'
		},
		{
			name: 'Salesforce',
			logo: salesforceLogo,
			link: 'https://trailblazer.me/id/josin'
		}
	];
</script>

<Container alternate>
	<h2 class="pb-[64px]">Profiles</h2>
	<div class="flex flex-wrap gap-[24px]">
		{#each profiles as profile}
			<ProfileCard {profile} />
		{/each}
	</div>
</Container>
