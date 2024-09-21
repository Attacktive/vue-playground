import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
	it("renders properly", () => {
		const wrapper = mount(HelloWorld, { props: { message: "Hello Vitest" } });
		expect(wrapper.text()).toContain("Hello Vitest");
	});
});
