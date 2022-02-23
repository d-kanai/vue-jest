import TodoNew from "@/views/TodoNew.vue";
import { flushPromises, mount } from "@vue/test-utils";

describe("TodoNew.vue", () => {
  it("validate required", async () => {
    //when
    const wrapper = await mount(TodoNew);
    await wrapper.vm.onSubmit()
    //then
    expect(wrapper.text()).toMatch("title is required");
    expect(wrapper.text()).toMatch("assignee is required");
  });
  it("submit and call api", async () => {
    //when
    const wrapper = await mount(TodoNew);
    await wrapper.find("#input-title").setValue("clean room")
    await wrapper.find("#input-assignee").setValue("Mari")
    await wrapper.vm.onSubmit()
    //then
    expect(wrapper.text()).not.toMatch("required");
  });
});
