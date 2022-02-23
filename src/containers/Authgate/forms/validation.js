import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string(),
  emailAddress: Yup.string()
    .email("You must provide a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must have at least 8 characters"),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Both passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
  termsAccepted: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
export const loginSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("You must provide a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
