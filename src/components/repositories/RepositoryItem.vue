<script setup lang="ts">
interface Props {
	link?: string;
	linkText?: string;
	trailingColon?: boolean;
}

withDefaults(
	defineProps<Props>(),
	{ trailingColon: true }
)
</script>

<template>
	<li>
		<slot name="pre-link"/>
		<a v-if="link" :href="link" target="_blank">{{ linkText }}</a>{{ trailingColon === true? ": ": "" }}
		<slot name="post-link"/>
		<slot>
			The default content is being shown.
			<br>
			You most likely want to fill the default slot!
		</slot>
	</li>
</template>

<style scoped>

</style>
