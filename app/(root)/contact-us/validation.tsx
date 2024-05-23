import { z } from "zod";

const requireMsg = (field: string) => `${field} field is required`;

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const schema = z.object({
  name: z
    .string({ message: requireMsg("Your Full Name") })
    .min(1, { message: requireMsg("Your Full Name") }),
  email: z
    .string({ message: requireMsg("Your Email Address") })
    .email({ message: "Please enter a valid email" }),
  phone: z
    .string({ message: requireMsg("Phone Number") })
    .regex(phoneRegex, "Please enter a valid Phone number"),
  help: z
    .string({ message: requireMsg("This") })
    .min(1, { message: requireMsg("This") }),
});
