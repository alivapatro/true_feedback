import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);
console.log("Resend api key",process.env.RESEND_API_KEY)
