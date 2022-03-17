import { findDoDList, DoDList } from "@/apis/DoDApi";
import { ref } from "vue";

export const useDoDList = () => {
  const dodList = ref({} as DoDList);
  const load = async () => {
    dodList.value = await findDoDList();
  };
  load();
  return dodList;
};
