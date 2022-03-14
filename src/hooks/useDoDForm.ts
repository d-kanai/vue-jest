import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export const useDoDForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      name: yup.string().required("name is required")
    }),
  });
  const name = useField("name").value
  // return { onDoDSubmit: handleSubmit, dodFormErrors: errors, dodcordFormData: formData }
  const formData = { name }
  return { onDoDSubmit: handleSubmit, dodFormErrors: errors, dodFormData: formData }
}

export const useDoDRecordForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      date: yup.string().required("date is required"),
      value: yup.string(),
      comment: yup.string(),
      dodId: yup.number(),
    }),
  });
  const date = useField("date").value;
  const value = useField("value").value;
  const comment = useField("comment").value;
  const dodId = useField<number>("dodId").value;
  const formData = { date, value, comment, dodId }
  return { onDoDRecordSubmit: handleSubmit, dodRecordErrors: errors, dodRecordFormData: formData }
};
