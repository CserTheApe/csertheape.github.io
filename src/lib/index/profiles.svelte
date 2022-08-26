<script>
	import Container from '$lib/common/container.svelte';
	import ProfileCard from '$lib/common/profile-card.svelte';
	import hackerrankLogo from '$lib/assets/profiles/hackerrank.png';
	import linkedLogo from '$lib/assets/profiles/linked.png';
	import salesforceLogo from '$lib/assets/profiles/salesforce.png';
	import duolingoLogo from '$lib/assets/profiles/duolingo.png';
	import khanLogo from '$lib/assets/profiles/khan.png';
	import gdevLogo from '$lib/assets/profiles/gdev.png';
	import kaggleLogo from '$lib/assets/profiles/kaggle.png';

	let profiles = [
		{
			name: 'LinkedIn',
			logo: linkedLogo,
			link: 'https://www.linkedin.com/in/josin-abraham-31b3a6118/'
		},
		{
			name: 'Google Developers',
			logo: gdevLogo,
			link: 'https://g.dev/CserTheApe'
		},
		{
			name: 'Kaggle',
			logo: kaggleLogo,
			link: 'https://www.kaggle.com/csertheape'
		},
		{
			name: 'Hackerrank',
			logo: hackerrankLogo,
			link: 'https://www.hackerrank.com/CserTheApe'
		},
		{
			name: 'Khan Academy',
			logo: khanLogo,
			link: 'https://www.khanacademy.org/profile/CserTheApe/'
		},
		{
			name: 'Duolingo',
			logo: duolingoLogo,
			link: 'https://www.duolingo.com/profile/josin.abraham'
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
	<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[24px]">
		{#each profiles as profile}
			<ProfileCard {profile} />
		{/each}
	</div>
</Container>
