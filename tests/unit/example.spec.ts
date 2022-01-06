import { mount } from "@vue/test-utils";
import Sample from '@/views/Sample.vue'

describe("Sample.vue", () => {
  it("should show sample string", () => {
    const wrapper = mount(Sample)
    expect(wrapper.text()).toMatch("Sample");
  });
});
