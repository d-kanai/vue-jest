import { findDoDRecordList, DoDRecordList } from "@/apis/DoDApi";
import { ref } from "vue";

export const useDoDRecordList = () => {
  const dodRecordList = ref({} as DoDRecordList);
  const dodId = ref(0);
  const selectDoD = async (id: number) => {
    dodRecordList.value = await findDoDRecordList(id);
    dodId.value = id;
  };
  return { dodRecordList, selectDoD, dodId };
};
