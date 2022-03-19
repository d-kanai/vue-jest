import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export const useDoDRecordForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      date: yup.string().required("date is required"),
      value: yup.string().required("value is required"),
      comment: yup.string(),
    }),
  });
  const date = useField("date").value;
  const value = useField("value").value;
  const comment = useField("comment").value;
  const formData = { date, value, comment };
  return {
    onSubmit: handleSubmit,
    formData,
    errors,
  };
};
