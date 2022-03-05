import TodoNew from "@/views/TodoNew.vue";
import * as api from "@/apis/TodoApi";
import { mount } from "@vue/test-utils";

describe("TodoNew.vue", () => {
  it("validate required field", async () => {
    //given
    const mockCreateTodoApi = jest
      .spyOn(api, "createTodo")
      .mockImplementation(jest.fn())
    //when
    const wrapper = await mount(TodoNew);
    await wrapper.vm.onSubmit()
    //then
    expect(wrapper.text()).toMatch("title is required");
    expect(wrapper.text()).toMatch("assignee is required");
    expect(mockCreateTodoApi).toHaveBeenCalledTimes(0)
  });
  it("submit and call api", async () => {
    //given
    const mockCreateTodoApi = jest
      .spyOn(api, "createTodo")
      .mockImplementation(jest.fn())
    //when
    const wrapper = await mount(TodoNew);
    await wrapper.find("#input-title").setValue("clean room")
    await wrapper.find("#input-assignee").setValue("Mari")
    await wrapper.vm.onSubmit()
    //then
    expect(wrapper.text()).not.toMatch("required");
    expect(mockCreateTodoApi).toHaveBeenCalled()
  });
});
