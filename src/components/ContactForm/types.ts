export interface IValues {
  name: string;
  email: string;
  phone: string; // Add the phone property
  message: string;
}

export interface ValidationTypeProps {
  type: keyof IValues;
}

import { TFunction } from "react-i18next";
export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: TFunction;
}
