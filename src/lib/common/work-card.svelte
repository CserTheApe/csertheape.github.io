<script lang="ts">
	export let left = false;
	export let job: { name: string; logo: string; role: string; years: string };
</script>

<div>
	{#if !left}
		<div class="flex max-h-[80px]">
			<img
				class="w-[64px] h-[64px] mr-[24px] object-contain rounded-full border-4"
				src={job.logo}
				alt="job-logo"
			/>
			<div class="flex flex-col justify-center gap-[8px]">
				<div class="subtitle-1">{`${job.name} (${job.years})`}</div>
				<div class="subtitle-2">{job.role}</div>
			</div>
		</div>
	{:else}
		<div class="flex max-h-[80px] justify-end text-right">
			<div class="flex flex-col justify-center gap-[8px]">
				<div class="subtitle-1">{`${job.name} (${job.years})`}</div>
				<div class="subtitle-2">{job.role}</div>
			</div>
			<img
				class="w-[64px] h-[64px] ml-[24px] object-contain rounded-full border-4"
				src={job.logo}
				alt="job-logo"
			/>
		</div>
	{/if}
</div>
