import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { contactFormSchema } from "~/lib/contactFormSchema";
import { LEAD_TEMPLATE } from '~/templates/lead'
import { env } from "~/env";
import { sendMail } from "~/utils/mailer";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {

        const email = LEAD_TEMPLATE({
          name: input.name,
          email: input.email,
          phone: input.phone,
          company: input.company,
          subject: input.subject,
          note: input.note,
          receivedAt: new Date().toLocaleString(),
        })

        await sendMail({
          from: {
            name: env.SMTP_FROM_NAME,
            address: env.SMTP_USER,
          },
          to: env.SMTP_TO_EMAIL,
          subject: `New Client: ${input.subject}`,
          html: email,
          replyTo: input.email,
        })
        return {
          success: true,
          message: "Email sent successfully",
        };
      } catch (error) {
        console.error("Error sending email:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email. Please try again later.",
        });
      }
    }),
});
