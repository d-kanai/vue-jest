import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Sample.vue", () => {
  it("xxx", () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toMatch("guide");
  });
});
