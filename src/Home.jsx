import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import kaaba from "./assets/kaaba.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

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

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<ContentWrapper>
				<Slogan>
					<motion.div
						variants={textVariant}
						initial="initial"
						animate="animate"
					>
						<h3>
							Your Sacred <span>Journey</span>, Our <span>Expertise</span>
						</h3>
					</motion.div>
				</Slogan>
				<Button>
					<p>View our services</p>
					<button onClick={() => navigate("/services")}>
						<IoIosArrowRoundForward />
					</button>
				</Button>
			</ContentWrapper>
			<motion.div variants={textVariant} initial="initial" animate="animate">
				<Img src={kaaba} alt="kaaba" />
			</motion.div>
		</div>
	);
};

export default Home;

const Img = styled.img`
	position: absolute;
	bottom: 5rem;
	width: 100%;
	max-width: 100vw;
	height: auto;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: 200;

	button {
		background-color: transparent;
		border: none;
		margin-left: 0.2rem;
		font-size: 1.5rem;
		color: rgb(218, 165, 32);
	}

	p {
		margin-top: 1rem;
	}
`;

const Slogan = styled.div`
	h3 {
		text-align: center;
		vertical-align: middle;
		line-height: 2rem;
		font-weight: 100;
	}
`;

const Button = styled.div`
	display: flex;
	align-items: center;
`;
