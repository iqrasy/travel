import styled from "styled-components";
import { motion } from "framer-motion";
import animate from "./animate.json";
import Lottie from "lottie-react";

const textVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	return (
		<motion.div variants={textVariant} initial="initial" animate="animate">
			<ContactContainer>
				<PageTitle>
					<span>Contact Us</span>
					<LottieContainer>
						<Lottie
							animationData={animate}
							loop={false}
							style={{ width: "13rem" }}
						/>
					</LottieContainer>
				</PageTitle>
				<ContactInfo>
					<ContactDetails>
						<p>Phone number: +92 300 4246355</p>
						<p>Email: alshafi630@gmail.com</p>
						<p>Main GT Road, Lahore</p>
					</ContactDetails>
					<p className="message">
						If you are outside Pakistan, please send a voice message on WhatsApp
						and use the email address for booking.
					</p>
					<ContactPerson>CEO - Hmayun Jutt</ContactPerson>
				</ContactInfo>
			</ContactContainer>
		</motion.div>
	);
};

export default Contact;

const ContactContainer = styled.div`
	padding: 2rem;
	text-align: left;

	@media only screen and (min-width: 1024px) {
		width: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
	}
`;

const PageTitle = styled.h2`
	color: #333;
	font-size: 2rem;
	margin-bottom: 1rem;
	text-align: center;
`;
const LottieContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
`;

const ContactInfo = styled.div`
	margin-top: 1rem;

	.message {
		text-align: center;
		margin-top: 2rem;
	}
`;

const ContactPerson = styled.p`
	font-weight: bold;
	left: 30%;
	position: absolute;
	bottom: 5rem;

	@media only screen and (min-width: 600px) and (max-width: 768px) {
		left: 40%;
		bottom: 6rem;
	}

	@media only screen and (min-width: 1024px) {
		bottom: 7rem;
		left: 45%;
	}
`;

const ContactDetails = styled.div`
	font-size: 1.2rem;
	line-height: 1.6;
	color: #555;
	border: solid grey 1px;
	padding: 1rem;
	border-radius: 0.5rem;
	margin-bottom: 0.5rem;

	p {
		margin: 0.5rem 0;
	}
`;
