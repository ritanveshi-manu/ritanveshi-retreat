import { IValues } from "../../components/ContactForm/types";

export default function validate(values: IValues) {
  let errors: Partial<IValues> = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "Phone number is invalid";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
}