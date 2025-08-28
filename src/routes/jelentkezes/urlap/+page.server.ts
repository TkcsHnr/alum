import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { EMAIL_PASSWORD } from '$env/static/private';

import nodemailer from 'nodemailer';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

function getStringField(fd: FormData, key: string): string {
	const value = fd.get(key);
	return typeof value === 'string' ? value : '';
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const subjects = getStringField(data, 'subjects').split(",");
		const service_email = getStringField(data, 'service_email');
		const service_name = getStringField(data, 'service_name');
		const school_type = getStringField(data, 'school_type');
		const student_name = getStringField(data, 'student_name');
		const parent_name = getStringField(data, 'parent_name');
		const email = getStringField(data, 'email');
		const message = getStringField(data, 'message');

		let emailBody = `Új jelentkezés érkezett:\n\n`;
		emailBody += `Diák neve: ${student_name}\n`;
		if (parent_name) {
			emailBody += `Szülő neve: ${parent_name}\n`;
		}
		emailBody += `Email: ${email}\n`;
		emailBody += `Szolgáltatás: ${service_name}\n`;
		if (school_type) {
			emailBody += `Középiskola típusa: ${school_type}\n`;
		}
		emailBody += `Tantárgyak: ${subjects.join(", ")}\n`;
		if (message) {
			emailBody += `Üzenet:\n${message}\n`;
		}

		const transporter = nodemailer.createTransport({
			host: "smtp.forpsi.com", // Forpsi SMTP
			port: 587,               // or 465 for SSL
			secure: false,           // true for port 465, false for 587
			auth: {
				user: "postmaster@alumoktatas.hu",
				pass: EMAIL_PASSWORD,
			},
		});

		(async () => {
			const info = await transporter.sendMail({
				from: "postmaster@alumoktatas.hu",
				to: service_email,
				replyTo: email,
				subject: `${service_name}`,
				text: emailBody,
			});

			console.log("Message sent:", info.messageId);
		})();

		return { success: true };
	},
} satisfies Actions;