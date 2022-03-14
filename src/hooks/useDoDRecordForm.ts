import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export const useDoDRecordForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      date: yup.string().required("date is required"),
      value: yup.string().required("value is required"),
      comment: yup.string(),
      dodId: yup.number().required("dodId is required"),
    }),
  });
  const date = useField("date").value;
  const value = useField("value").value;
  const comment = useField("comment").value;
  const dodId = useField<number>("dodId").value;
  const formData = { date, value, comment, dodId }
  return { onDoDRecordSubmit: handleSubmit, dodRecordErrors: errors, dodRecordFormData: formData }
};
