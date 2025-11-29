import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormSchema } from "~/lib/contactFormSchema";
import { LEAD_TEMPLATE } from "~/templates/lead";
import { env } from "~/env";
import { sendMail } from "~/utils/mailer";

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    // Validate request body
    const validatedData = contactFormSchema.parse(req.body);

    // Create email from template
    const email = LEAD_TEMPLATE({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      subject: validatedData.subject,
      note: validatedData.note,
      receivedAt: new Date().toLocaleString(),
    });

    // Send email
    await sendMail({
      from: {
        name: env.SMTP_FROM_NAME,
        address: env.SMTP_USER,
      },
      to: env.SMTP_TO_EMAIL,
      subject: `New Client: ${validatedData.subject}`,
      html: email,
      replyTo: validatedData.email,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
}
