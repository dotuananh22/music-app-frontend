import { InferType, object, string } from "yup";

const sendEmailSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  subject: string().required("Subject is required"),
  message: string().required("Message is required"),
});

type SendEmailInput = InferType<typeof sendEmailSchema>;

export type { SendEmailInput };
export { sendEmailSchema };
