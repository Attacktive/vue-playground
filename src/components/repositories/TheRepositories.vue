<script setup lang="ts">

import RepositoryItem from "@/components/repositories/RepositoryItem.vue";
</script>

<template>
	<ul>
		<RepositoryItem link="https://github.com/Attacktive/vue-exercise" link-text="vue-exercise">
			This very repository!
		</RepositoryItem>

		<RepositoryItem>
			<template #pre-link>
				troubleshooter-editor: The editor of the game
				<a href="https://store.steampowered.com/app/470310/TROUBLESHOOTER_Abandoned_Children" target="_blank">TROUBLESHOOTER: Abandoned Children</a>
			</template>
			<ul>
				<RepositoryItem link="https://github.com/Attacktive/troubleshooter-editor-back-end" link-text="troubleshooter-editor-back-end">
					The backend written in <em>Kotlin</em>.
				</RepositoryItem>
				<RepositoryItem link="https://github.com/Attacktive/troubleshooter-editor-front-end-svelte" link-text="troubleshooter-editor-front-end-svelte">
					The frontend with <em>Svelte</em>, <em>TypeScript</em>, and <em>Tailwind CSS</em>.
				</RepositoryItem>
			</ul>
		</RepositoryItem>

		<RepositoryItem link="https://github.com/Attacktive/witchspring-r-editor" link-text="witchspring-r-editor">
			The web-based save file editor for the game <a href="https://store.steampowered.com/app/1958220/WitchSpring_R/">WitchSpring R</a>
			powered by <em>Svelte</em>, <em>TypeScript</em>, and <em>Tailwind CSS</em>.
		</RepositoryItem>

		<RepositoryItem link="https://github.com/Attacktive/jandi-shortcut-disabler" link-text="jandi-shortcut-disabler">
			A Chrome extension to disable annoying keyboard shortcuts on <a href="https://www.jandi.com">Jandi.com</a>.
		</RepositoryItem>

		<RepositoryItem link="https://github.com/Attacktive/javascript-loosely-equal-example-giver" link-text="javascript-loosely-equal-example-giver">
			A small research on <em>JavaScript</em> loose equality operator (<code>==</code>).
		</RepositoryItem>

		<Repository-item link="https://github.com/Attacktive/vpn-manager" link-text="vpn-manager">
			A <em>Java</em> application which periodically checks on the internet connection and turn on the <a href="https://mudfish.net">Mudfish VPN</a> item.
		</Repository-item>

		<RepositoryItem link="https://github.com/Attacktive/ipa-to-pronunciation-respelling" link-text="ipa-to-pronunciation-respelling">
			A <em>Bootstrap</em>-powered HTML page that converts "cryptic"
			<a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">IPA</a>
			expressions into
			<a href="https://en.wikipedia.org/wiki/Pronunciation_respelling_for_English">English pronunciation respelling</a>.
		</RepositoryItem>

		<li>
			...and more on <a href="https://github.com/Attacktive?tab=repositories">my repositories</a>!
		</li>
	</ul>
</template>

<style scoped>
code {
	background-color: #eeeeee;
}
</style>
