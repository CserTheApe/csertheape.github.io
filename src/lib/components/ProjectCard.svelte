<script lang="ts">
    import Text from '$lib/components/Text.svelte';
	let { project } = $props();
</script>

<style lang="scss">
    .card {
        border: 2px solid $color-primary;
        border-radius: 8px;
        background-color: $color-secondary-light;
        padding: 16px 24px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 100%;

        &:hover {
            filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.146));
        }
    }

    .card-head {
        display: flex;
        gap: 16px;
    }

    img {
        width: 80px;
        height: 80px;
        object-fit: contain;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 12px;
    }
</style>

<a href={project.link ?? 'javascript:void(0);'} target={project.link ? '_blank' : ''}>
	<div class="card">
        <div class="card-head">
            <img src={project.logo} alt="project-logo" />
            <div>
                <Text class="h3">{project.name}</Text>
                <div class="tags">
                    {#each project.tags as tag}
                        <Text class="tag">{tag}</Text>
                    {/each}
                </div>
            </div>
        </div>
        <Text>{project.description}</Text>
	</div>
</a>
