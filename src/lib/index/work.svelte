<script>
	import Container from '$lib/common/container.svelte';
	import WorkCard from '$lib/common/work-card.svelte';
	import goodsLogo from '$lib/assets/work/goods.jpg';
	import infosysLogo from '$lib/assets/work/infosys.jpg';
	import unimelbLogo from '$lib/assets/work/unimelb.png';
	import sjcetLogo from '$lib/assets/work/sjcet.png';

	let jobs = [
		{
			name: 'Goods',
			role: 'Full stack developer',
			years: '2021 - present',
			logo: goodsLogo
		},
		{
			name: 'University of Melbourne',
			role: 'MS - Data Science',
			years: '2019 - 2021',
			logo: unimelbLogo
		},
		{
			name: 'Infosys',
			role: 'Systems Engineer',
			years: '2018 - 2019',
			logo: infosysLogo
		},
		{
			name: "St. Joseph's College of Engineering and Technology",
			role: 'BTech - Computer Science and Engineering',
			years: '2018 - 2019',
			logo: sjcetLogo
		}
	];
</script>

<Container alternate>
	<h2 class="pb-[40px]">Experience</h2>
	<div class="timeline">
		<ul>
			{#each jobs as job, jobIndex}
				<li class="py-[48px]">
					<div class="flex gap-[24px] justify-start md:justify-center">
						<div class="hidden md:block grow basis-0">
							{#if jobIndex % 2 == 1}
								<WorkCard {job} left />
							{/if}
						</div>
						<div class="grow-0">
							<div class="relative w-[24px] h-[24px] top-[20px] rounded-full bg-alternate-3">
								{#if jobIndex > 0}
									<div class="relative w-[4px] h-[160px] top-[-160px] left-[10px] bg-alternate-3" />
								{/if}
							</div>
						</div>
						<div class="grow basis-0">
							{#if jobIndex % 2 == 0}
								<WorkCard {job} />
							{:else}
								<div class="md:hidden"><WorkCard {job} /></div>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</Container>
