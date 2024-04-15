"use server";

import { Resend } from "resend";
import { z } from "zod";

import { getAdminClient } from "@/lib/utils";

import ContactFormEmail from "./email";
import { formSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (result.success === false) {
    return { success: false, error: result.error.format() };
  }

  let sent = false;
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "nguyenconglong95@gmail.com",
      subject: `[minthome.vn] Yêu cầu liên hệ - ${data.name}`,
      react: ContactFormEmail(data),
    });
    return { success: true, data: result.data };
  } catch (error) {
    //TODO: log error
    console.log(error);
    return { success: false, error: "Unknown error" };
  } finally {
    //* This is to log the request to the database
    const pb = await getAdminClient();
    await pb.collection("requests").create({ ...data, sent });
  }
}
