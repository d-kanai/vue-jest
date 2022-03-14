import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export const useDoDForm = () => {
  const { handleSubmit, errors } = useForm({
    validationSchema: yup.object({
      name: yup.string().required("name is required")
    }),
  });
  const name = useField("name").value
  const formData = { name }
  return { onDoDSubmit: handleSubmit, dodFormErrors: errors, dodFormData: formData }
}