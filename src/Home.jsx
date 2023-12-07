import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import kaaba from "./assets/kaaba.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<ContentWrapper>
				<Slogan>
					<h3>
						Your Sacred <span>Journey</span>, Our <span>Expertise</span>
					</h3>
				</Slogan>
				<Button>
					<p>View our Packages</p>
					<button onClick={() => navigate("/services")}>
						<IoIosArrowRoundForward />
					</button>
				</Button>
			</ContentWrapper>
			<Img src={kaaba} alt="kaaba" />
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

	button {
		background-color: transparent;
		border: none;
		margin-top: 1.3rem;
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
	}
`;

const Button = styled.div`
	display: flex;
	align-items: center;
`;
