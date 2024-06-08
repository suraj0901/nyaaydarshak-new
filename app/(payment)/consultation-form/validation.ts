import { z } from "zod";

export const Gender = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

export const Languages = [
  { label: "Hindi", value: "hindi" },
  { label: "English", value: "english" },
  { label: "Other", value: "other" },
];

const requireMsg = (field: string) => `${field} field is required`;

const ageRegex = new RegExp(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/);

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const gender = Gender.map((item) => item.value);
const languages = Languages.map((item) => item.value);
export const schema = z.object({
  fullName: z
    .string({ message: requireMsg("Your Full Name") })
    .min(1, { message: requireMsg("Your Full Name") }),
  phone: z
    .string({ message: requireMsg("Phone Number") })
    .regex(phoneRegex, "Please enter a valid Phone number"),
  age: z.string({ message: requireMsg("Age") }).regex(ageRegex, {
    message: "Please enter a valid age",
  }),
  gender: z.enum(gender, {
    message: "Please select a gender",
  }),
  preferredLanguage: z.enum(languages, {
    message: "Please select a language",
  }),
});
