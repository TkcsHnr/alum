import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { EMAIL_PASSWORD } from '$env/static/private';

import * as nodemailer from 'nodemailer';

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

		try {
			const info1 = await transporter.sendMail({
				from: "postmaster@alumoktatas.hu",
				to: service_email,
				replyTo: email,
				subject: `${service_name}`,
				text: emailBody,
			});
			console.log("Email sent:", info1.messageId);
		} catch (err) {
			console.error("Email sending failed:", err);
			return { received: false, error: "A jelentkező emailt nem sikerült elküldeni." };
		}

		let error;
		let confirmEmailBody = "";
		if (parent_name != '') {
			confirmEmailBody += `Tisztelt ${parent_name}!\n`;
			confirmEmailBody += `Megkaptuk ${student_name} jelentkezését, hamarosan felvesszük Önnel a kapcsolatot!`;
		} else {
			confirmEmailBody += `Kedves ${student_name}!\n`;
			confirmEmailBody += `Megkaptuk a jelentkezésedet, hamarosan felvesszük veled a kapcsolatot!\n`;
		}
		confirmEmailBody += "Üdvözlettel,\nAz Alum Oktatási Központ csapata";
		try {
			const info2 = await transporter.sendMail({
				from: service_email,
				to: email,
				subject: "Jelentkezés megerősítése",
				text: confirmEmailBody,
			});
			console.log("Confirmation email sent:", info2.messageId);
		} catch (err) {
			console.error("Confirmation email sending failed:", err);
			return { received: true, error: "A visszaigazoló emailt nem sikerült elküldeni." };
		}

		return { received: true, email };
	},
} satisfies Actions;