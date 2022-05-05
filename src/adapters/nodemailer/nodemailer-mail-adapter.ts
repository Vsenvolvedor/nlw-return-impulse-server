import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b03e815cffe65f",
    pass: "01712990fa9f72"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: sendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Paulo <paulosuarnerquer@gmail.com>',
    subject,
    html: body
  })
  }
}