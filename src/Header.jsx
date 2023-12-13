import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	return (
		<Main>
			<h3 onClick={() => navigate("/")}>AL SHAFEE</h3>
			<button onClick={() => navigate("/services")} className="button-link">
				Services
			</button>
			<button onClick={() => navigate("/contact")} className="button-link">
				Contact Us
			</button>
			{/* <button className="translator">Urdu</button> */}
		</Main>
	);
};

export default Header;

const Main = styled.div`
	display: flex;
	margin: 1.3rem;
	font-size: 0.8rem;
	font-weight: 100;
	white-space: nowrap;

	h3 {
		font-weight: 200;
		font-size: 1.5rem;
		cursor: pointer;
	}

	/* button.translator {
		background-color: transparent;
		outline: none;
		border: none;
		margin: 0 1rem;
	} */

	button.button-link {
		position: relative;
		border: none;
		background-color: transparent;
		margin: 0 1rem;
		text-decoration: none;
		overflow: hidden;

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 0;
			height: 2px;
			background-color: rgb(218, 165, 32);
			transition: width 0.3s ease;
		}

		&:focus::after {
			width: 100%;
		}
	}
`;
