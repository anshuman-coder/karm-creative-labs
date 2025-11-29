import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  note: z.string().min(1, "Note is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
