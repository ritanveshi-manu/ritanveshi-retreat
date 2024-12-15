export interface IValues {
  name: string;
  email: string;
  phone: string; // Add the phone property
  message: string;
}

export interface ValidationTypeProps {
  type: keyof IValues;
}

export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: (key: string) => string;
}