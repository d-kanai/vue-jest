import { findDoDRecordList, DoDRecordList } from "@/apis/DoDApi";
import { ref } from "vue";

export const useDoDRecordList = (dodId: number) => {
  const dodRecordList = ref({} as DoDRecordList);
  const load = async () => {
    dodRecordList.value = await findDoDRecordList(dodId);
  };
  load();
  return dodRecordList;
};
