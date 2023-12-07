import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<Main>
			<FooterContainer>
				<div>
					<h4>AL SHAFEE</h4>
				</div>
				<div className="buttons-container">
					<button onClick={() => navigate("/about")}>About us</button>
					<button onClick={() => navigate("/products")}>Products</button>
					<button onClick={() => navigate("/services")}>Services</button>
				</div>
			</FooterContainer>
		</Main>
	);
};

export default Footer;

const Main = styled.div`
	background-color: #212329;
	color: #fff;
	padding-bottom: 4rem;
	display: flex;
	position: fixed;
	width: 100%;
	height: 10vh;
	bottom: 0;

	.buttons-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	button {
		border: none;
		background-color: transparent;
		margin: 1rem;
		color: #fff;

		&:hover {
			background-color: grey;
			border-radius: 0.5rem;
			padding: 0.2rem 0;
		}
	}
`;

const FooterContainer = styled.div`
	width: 80%;
	background-color: #212329;
	display: block;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 1rem auto;

	h4 {
		text-align: center;
	}
`;
