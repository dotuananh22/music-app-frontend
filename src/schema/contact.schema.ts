import { object, string, InferType } from "yup";

const contactBody = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  subject: string().required("Subject is required"),
  message: string().required("Message is required"),
});

type ContactInput = InferType<typeof contactBody>;

export { contactBody };
export type { ContactInput };
