import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Gerekli alanlar eksik.' }, { status: 400 });
    }

    // Nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aydinysf@gmail.com',
        pass: process.env.SMTP_PASSWORD, // Read from .env.local
      },
    });

    const mailOptions = {
      from: '"Web Sitesi Formu" <aydinysf@gmail.com>',
      to: 'aydinysf@gmail.com',
      replyTo: email,
      subject: `Yeni Form Talebi: ${service} - ${name}`,
      text: `
        Ad Soyad: ${name}
        E-posta: ${email}
        Hizmet: ${service}
        Mesaj: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #E73142;">Yeni İletişim Formu Kaydı</h2>
          <p>Web siteniz üzerinden yeni bir keşif talebi oluşturuldu. Detaylar aşağıdadır:</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta (Cevaplamak için):</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>İlgilenilen Hizmet:</strong> ${service}</p>
          <p><strong>Mesaj/Problem:</strong><br/> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mail başarıyla gönderildi.' });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json({ error: 'Mail gönderilemedi.' }, { status: 500 });
  }
}
