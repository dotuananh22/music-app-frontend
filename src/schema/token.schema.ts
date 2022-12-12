import { date, object, string, TypeOf, mixed } from "yup";

const saveTokenBody = object({
  token: string().required("Token is required"),
  userId: string()
    .required("User Id is required")
    .length(24, "User Id must be 24 characters"),
  type: mixed()
    .required("Type is required")
    .oneOf([0, 1], "Type must be 0 or 1"),
  expiredAt: date().required("Expired At is required"),
});

const refreshAuthTokenBody = saveTokenBody.pick(["token", "userId"]);

const generateResetPasswordTokenBody = object({
  email: string().required("Email is required"),
});

const resetPasswordBody = object({
  tokenId: string()
    .required("Token is required")
    .length(24, "Token is not valid"),
  // Password must require at least 6 to 32 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number
  password: string()
    .required("Password is required")
    .default("")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,32}$/,
      "Password must be at least 6 to 32 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number"
    ),
});

const SaveTokenSchema = object({
  body: saveTokenBody,
});

const GenerateResetPasswordTokenSchema = object({
  body: generateResetPasswordTokenBody,
});

const RefreshAuthTokenSchema = object({
  body: refreshAuthTokenBody,
});

const ResetPasswordSchema = object({
  body: resetPasswordBody,
});

type SaveTokenInput = TypeOf<typeof SaveTokenSchema>;
type RefreshAuthTokenInput = TypeOf<typeof RefreshAuthTokenSchema>;
type GenerateResetPasswordTokenInput = TypeOf<
  typeof GenerateResetPasswordTokenSchema
>;
type ResetPasswordInput = TypeOf<typeof ResetPasswordSchema>;

export {
  SaveTokenSchema,
  RefreshAuthTokenSchema,
  GenerateResetPasswordTokenSchema,
  ResetPasswordSchema,
};
export type {
  SaveTokenInput,
  RefreshAuthTokenInput,
  GenerateResetPasswordTokenInput,
  ResetPasswordInput,
};
