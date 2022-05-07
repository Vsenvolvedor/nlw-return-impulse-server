import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "",
  port: 0,
  auth: {
    user: "",
    pass: ""
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: sendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Nome <nome@gmail.com>',
    subject,
    html: body
  })
  }
}