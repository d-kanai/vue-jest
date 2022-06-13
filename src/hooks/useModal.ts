import { findDoDList, DoDList } from "@/apis/DoDApi";
import { ref } from "vue";

export const useModal = () => {
  const isActive = ref(false);
  const open = () => (isActive.value = true);
  const close = () => (isActive.value = false);
  return { isActive, open, close };
};
