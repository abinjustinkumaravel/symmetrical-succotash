import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, intent, budget, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "abinjustinkumaravel@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${intent ? intent.toUpperCase() + " — " : ""}${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0F0E0D; color: #F2EFE8; border-radius: 12px;">
          <h2 style="font-size: 22px; font-weight: 300; color: #C8A96E; margin-bottom: 24px;">New Portfolio Message</h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #9A9690; font-size: 12px; width: 100px;">NAME</td>
                <td style="padding: 8px 0; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9A9690; font-size: 12px;">EMAIL</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #C8A96E;">${email}</a></td></tr>
            ${intent ? `<tr><td style="padding: 8px 0; color: #9A9690; font-size: 12px;">INTENT</td>
                <td style="padding: 8px 0; font-size: 14px;">${intent}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 8px 0; color: #9A9690; font-size: 12px;">BUDGET</td>
                <td style="padding: 8px 0; font-size: 14px;">${budget}</td></tr>` : ""}
          </table>

          <div style="background: #1A1816; border: 1px solid #2A2825; border-radius: 8px; padding: 20px;">
            <p style="font-size: 12px; color: #9A9690; margin: 0 0 8px 0;">MESSAGE</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
