import React from "react";

import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>Thank you for spending your time for me!</Preview>
			<Tailwind>
				<Body className="bg-slate-100 text-slate-900">
					<Container>
						<Section className="bg-white borderBlack my-10 px-10 py-4 rounded-lg shadow-md">
							<Heading className="text-2xl text-center leading-tight">
								You received the following message from GuangHui's website
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>The sender's email is: {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormEmail;
