"use server";

import { FormErrors, FormState } from "@/components/pages/contact/contact-form";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate form data
    const errors: FormErrors = {};
    if (!name) errors.name = ["Name is required"];
    if (!email || !email.includes("@"))
      errors.email = ["Valid email is required"];
    if (!subject) errors.subject = ["Subject is required"];
    if (!message) errors.message = ["Message is required"];

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Validation failed",
        errors,
      };
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Beautified email template for the owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <div style="background-color: #4a90e2; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            <strong>Name:</strong> ${name}
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            <strong>Email:</strong> <a href="mailto:${email}" style="color: #4a90e2; text-decoration: none;">${email}</a>
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            <strong>Subject:</strong> ${subject}
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            <strong>Message:</strong>
          </p>
          <p style="font-size: 16px; color: #333333; background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0; margin: 10px 0;">
            ${message}
          </p>
        </div>
        <div style="text-align: center; padding: 10px; border-top: 1px solid #e0e0e0; color: #777777; font-size: 12px;">
          <p style="margin: 0;">Sent from Your Website Contact Form</p>
        </div>
      </div>
    `;

    // Response email template for the recipient
    const recipientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <div style="background-color: #28a745; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You for Your Message!</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            Dear ${name},
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            Thank you for reaching out through my website. I have received your message and will get back to you as soon as possible.
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            <strong>Your Message:</strong>
          </p>
          <p style="font-size: 16px; color: #333333; background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0; margin: 10px 0;">
            ${message}
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            If you have any urgent inquiries, feel free to reply to this email.
          </p>
          <p style="font-size: 16px; color: #333333; margin: 10px 0;">
            Best regards,<br />
            Nayan Chandra Datta
          </p>
        </div>
        <div style="text-align: center; padding: 10px; border-top: 1px solid #e0e0e0; color: #777777; font-size: 12px;">
          <p style="margin: 0;">This is an automated response. Please do not reply directly to this email unless necessary.</p>
        </div>
      </div>
    `;

    // Send email to the owner
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "nayanchdatta.dev@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: ownerEmailHtml,
      replyTo: email,
    });

    // Send response email to the recipient
    await transporter.sendMail({
      from: `"Nayan Chandra Datta" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Me",
      text: `Dear ${name},\n\nThank you for reaching out through my website. I have received your message and will get back to you as soon as possible.\n\nYour Message:\n${message}\n\nBest regards,\nNayan Chandra Datta`,
      html: recipientEmailHtml,
    });

    revalidatePath("/contact");

    return {
      success: true,
      message: "Your message has been sent successfully!",
      errors: null,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
      errors: null,
    };
  }
}
