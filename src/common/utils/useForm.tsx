import { useState } from "react";
import { IValues } from "../../components/ContactForm/types";

const useForm = (validate: (values: IValues) => any) => {
  const [values, setValues] = useState<IValues>({
    name: "",
    email: "",
    phone: "", // Initialize the phone property
    message: "",
  });

  const [errors, setErrors] = useState<Partial<IValues>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export { useForm };