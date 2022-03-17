import { flushPromises, mount } from "@vue/test-utils";
import router from "@/router";

export async function mountWithFlushPromise(component: any, url?: string) {
  if(url) {
    router.push(url) 
    await router.isReady()
  } 
  const wrapper = mount(component, { global: { plugins: [router] } });
  await flushPromises();
  return wrapper;
}
