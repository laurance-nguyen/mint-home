import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
  email: z.string().email(),
  company: z.string().min(2).max(50),
  message: z.string().min(2).max(500),
});
