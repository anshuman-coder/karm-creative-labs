import NodeMailer from 'nodemailer'
import type { SendMailOptions } from 'nodemailer'
import { env } from '../env.js'

const transporter = NodeMailer.createTransport({
  service: env.SMTP_SERVICE,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASSWORD,
  }
})

export async function sendMail(params: SendMailOptions) {
  return transporter.sendMail(params)
}