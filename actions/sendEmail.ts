"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const message = formData.get("message");
	const senderEmail = formData.get("senderEmail");

	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	const { data, error } = await resend.emails.send({
		from: "Huy <onboarding@resend.dev>",
		to: "20521412@gm.uit.edu.vn",
		subject: "HELLO WORLD",
		reply_to: senderEmail as string,
		text: message as string,
		react: React.createElement(ContactFormEmail, {
			message: message as string,
			senderEmail: senderEmail as string,
		}),
	});

	if (error) {
		return {
			error: getErrorMessage(error),
		};
	}

	return { data };
};
