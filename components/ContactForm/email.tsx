import { z } from "zod";

import { formSchema } from "./schema";

const ContactFormEmail = ({
  name,
  phone,
  email,
  company,
  message,
}: z.infer<typeof formSchema>) => (
  <div>
    <h1>Yêu cầu liên hệ</h1>
    <p>
      Từ: <strong>{name}</strong>
    </p>
    <p>Email: {email}</p>
    <p>Điện thoại: {phone}</p>
    <p>Công ty: {company}</p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
