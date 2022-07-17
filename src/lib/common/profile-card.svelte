<script lang="ts">
	export let profile: { name: string; logo: string; link: string };
</script>

<a href={profile.link ?? 'javascript:void(0);'} target="_blank">
	<div
		class="rounded-[8px] border-[2px] overflow-hidden border-transparent hover:border-primary w-full aspect-square relative text-center group"
	>
		<img
			class="w-full h-full group-hover:scale-110 z-0 absolute"
			src={profile.logo}
			alt="profile-logo"
		/>
		<div class="absolute hidden group-hover:block h-full w-full opacity-60 bg-secondary z-10" />
		<div
			class="relative hidden group-hover:inline-block bg-secondary z-20 p-[8px] subtitle-1 rounded-[8px] top-[50%] translate-y-[-50%]"
		>
			{profile.name}
		</div>
	</div>
</a>
