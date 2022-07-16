<script lang="ts">
	export let project: {
		name: string;
		logo: string;
		link?: string;
		description: string;
		tags: string[];
	};
</script>

<a href={project.link ?? 'javascript:void(0);'} target={project.link ? '_blank' : ''}>
	<div
		class="border-[2px] rounded-[8px] h-full bg-secondary-light px-[24px] py-[16px] flex gap-[16px] overflow-hidden hover:drop-shadow-lg"
	>
		<img
			class="w-[80px] h-[80px] object-contain rounded-[8px] border-[1px]"
			src={project.logo}
			alt="project-logo"
		/>
		<div>
			<h3>{project.name}</h3>
			<div class="flex flex-wrap gap-[8px] mt-[12px] mb-[24px]">
				{#each project.tags as tag}
					<div class="over-line bg-secondary-dark rounded-full px-[8px] py-[4px]">{tag}</div>
				{/each}
			</div>
			<p>{project.description}</p>
		</div>
	</div>
</a>
