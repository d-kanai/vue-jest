import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export const useDoDForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      name: yup.string().required("name is required")
    }),
  });
  const name = useField("name").value
  return { handleSubmit, errors, name }
}

export const useDoDRecordForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      date: yup.string().required("date is required"),
      dodId: yup.number(),
    }),
  });
  // @Improve: fieldを１つの値で返せるようにする
  const date = useField("date").value;
  const value = useField("value").value;
  const comment = useField("comment").value;
  const dodId = useField<number>("dodId").value;
  return { DoDRecordHandleSubmit: handleSubmit, errors, date, value, comment, dodId }
};
