import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";

vi.mock(
	"vue-router",
	async () => {
		return {
			RouterView: {
				render: () => {
				}
			},
			RouterLink: {
				render: () => {
				}
			}
		};
	});

describe(
	"App",
	() => {
		it(
			"updates the subject correctly",
			() => {
				const wrapper = mount(App);

				const subjects = new Set<string>();
				let count = 1;
				const intervalId = setInterval(
					() => {
						const text = wrapper.get(".wrapper > .greetings > h1").text();
						const matches = /(\w+) did it!/.exec(text);
						expect(matches).toBeTruthy();

						const [_, subject] = Array.from(matches as RegExpExecArray);
						subjects.delete(subject);

						count++;
						if (count >= 10) {
							clearInterval(intervalId);
							expect(subjects).toHaveLength(3);
						}
					},
					1000
				);

			}
		);
	}
);
