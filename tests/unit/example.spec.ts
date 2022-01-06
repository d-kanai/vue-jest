import { mount } from "@vue/test-utils";
import Sample from '@/views/Sample.vue'

describe("Sample.vue", () => {
  it("xxx", () => {
    const wrapper = mount(Sample)
    expect(wrapper.text()).toMatch("Sample");
  });
});
