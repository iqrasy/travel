// import { useState, useEffect } from "react";
// import { servicesData } from "./Data.js";
// import styled from "styled-components";
// import ServiceCarousel from "./ServiceCarousel.jsx";
// import { Carousel } from "react-bootstrap";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animation2 from "../animation2.json";

// const textVariant = {
// 	initial: {
// 		opacity: 0,
// 	},
// 	animate: {
// 		x: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 1,
// 			ease: "easeInOut",
// 			staggerChildren: 0.1,
// 		},
// 	},
// };

const Services = () => {
	return <div>Hi</div>;
	// const [selectLocation, setSelectedLocation] = useState("");
	// const [selectCategory, setSelectedCategory] = useState("");
	// const [uniqueLocations, setUniqueLocations] = useState([]);
	// const [uniqueCategories, setUniqueCategories] = useState([]);
	// const [isFilterSelected, setIsFilterSeleced] = useState(false);

	// useEffect(() => {
	// 	const locationsSet = new Set(
	// 		servicesData.map((service) => service.location)
	// 	);
	// 	const categoriesSet = new Set(
	// 		servicesData.map((service) => service.category)
	// 	);

	// 	const locationsArray = [...locationsSet];
	// 	const categoriesArray = [...categoriesSet];

	// 	setUniqueLocations(["", ...locationsArray]);
	// 	setUniqueCategories(["", ...categoriesArray]);
	// }, []);

	// const handleLocation = (location) => {
	// 	setSelectedLocation(location);
	// 	setIsFilterSeleced(true);
	// };

	// const handleCategory = (category) => {
	// 	setSelectedCategory(category);
	// 	setIsFilterSeleced(true);
	// };

	// const filteredData = servicesData.filter((service) => {
	// 	const isLocationMatch =
	// 		!selectLocation || service.location === selectLocation;
	// 	const isCategoryMatch =
	// 		!selectCategory || service.category === selectCategory;
	// 	return isLocationMatch && isCategoryMatch;
	// });
	// return (
	// 	<>
	// 		<Pitch>
	// 			<motion.div variants={textVariant} initial="initial" animate="animate">
	// 				<p>
	// 					Explore our comprehensive range of travel services designed to make
	// 					your pilgrimage and travel experiences seamless and unforgettable.
	// 					Our offerings include specialized packages for Hajj and Umrah,
	// 					featuring both short and long durations. Immerse yourself in comfort
	// 					with our 3, 4, and 5-star Umrah packages tailored to meet your
	// 					preferences.
	// 				</p>
	// 				<p>
	// 					Embark on guided tours that provide enriching cultural and
	// 					historical insights, and let us take care of your air tickets for a
	// 					hassle-free journey. Trust us to make your travel dreams a reality
	// 				</p>
	// 				<Animation>
	// 					<Lottie animationData={animation2} loop={false} />
	// 				</Animation>
	// 			</motion.div>
	// 		</Pitch>
	// 		<Filters>
	// 			<select
	// 				value={selectLocation}
	// 				onChange={(e) => handleLocation(e.target.value)}
	// 			>
	// 				<option value="">location</option>
	// 				{uniqueLocations.map(
	// 					(location, index) =>
	// 						location && (
	// 							<option key={index} value={location}>
	// 								{location}
	// 							</option>
	// 						)
	// 				)}
	// 			</select>
	// 			<select
	// 				value={selectCategory}
	// 				onChange={(e) => handleCategory(e.target.value)}
	// 			>
	// 				<option value="">category</option>
	// 				{uniqueCategories.map(
	// 					(category, index) =>
	// 						category && (
	// 							<option key={index} value={category}>
	// 								{category}
	// 							</option>
	// 						)
	// 				)}
	// 			</select>
	// 		</Filters>
	// 		{isFilterSelected ? (
	// 			<Div>
	// 				{filteredData.map((service, index) => (
	// 					<Main key={index}>
	// 						<Carousel interval={null}>
	// 							{service.images.map((image, imageIndex) => (
	// 								<Carousel.Item key={imageIndex}>
	// 									<img
	// 										className="d-block w-100"
	// 										src={image}
	// 										alt={`${service.title} - Slide ${imageIndex}`}
	// 									/>
	// 								</Carousel.Item>
	// 							))}
	// 						</Carousel>
	// 						<Info>
	// 							<p>
	// 								{service.title} - {service.location}
	// 							</p>
	// 							<p>{service.category}</p>
	// 						</Info>
	// 					</Main>
	// 				))}
	// 			</Div>
	// 		) : (
	// 			<Slider>
	// 				{servicesData.map((service, index) => (
	// 					<ServiceCarousel
	// 						key={index}
	// 						title={service.title}
	// 						images={service.images}
	// 						category={service.category}
	// 						location={service.location}
	// 					/>
	// 				))}
	// 			</Slider>
	// 		)}
	// 	</>
	// );
};

export default Services;

// const Animation = styled.div`
// 	width: 25vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin: auto;

// 	@media only screen and (min-width: 1024px) {
// 		width: 30vh;
// 	}

// 	@media only screen and (min-width: 600px) and (max-width: 768px) {
// 		width: 30vh;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		margin: auto;
// 	}
// `;

// const Div = styled.div`
// 	margin-bottom: 10rem;

// 	@media only screen and (min-width: 600px) and (max-width: 768px) {
// 		display: grid;
// 		grid-template-columns: repeat(2, 1fr);
// 		grid-template-rows: 1fr;
// 		grid-column-gap: 0px;
// 		grid-row-gap: 0px;
// 	}

// 	@media only screen and (min-width: 1024px) {
// 		display: grid;
// 		grid-template-columns: repeat(3, 1fr);
// 		grid-template-rows: 1fr;
// 		grid-column-gap: 0px;
// 		grid-row-gap: 0px;
// 	}
// `;

// const Main = styled.div`
// 	max-width: 30rem;
// 	padding: 0 1rem;
// 	border-radius: 0.7rem;
// 	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
// 		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
// 	margin: 1rem 0.4rem 0 0.4rem;

// 	img {
// 		margin-top: 0.7rem;
// 		height: 22rem;
// 		object-fit: cover;
// 		border-radius: 0.5rem;
// 	}

// 	@media only screen and (min-width: 1024px) {
// 		img {
// 			margin-top: 0.7rem;
// 			height: 22rem;
// 			object-fit: cover;
// 			border-radius: 0.5rem;
// 		}
// 	}
// `;

// const Info = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// `;

// const Pitch = styled.div`
// 	padding: 0 1rem;
// 	text-align: center;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin: auto;

// 	@media only screen and (min-width: 1024px) {
// 		width: 70vh;
// 		font-size: 1.2rem;
// 	}

// 	@media only screen and (min-width: 600px) and (max-width: 768px) {
// 		width: 70vh;
// 	}
// `;

// const Slider = styled.div`
// 	margin-bottom: 10rem;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;

// 	@media only screen and (min-width: 1024px) {
// 		display: grid;
// 		grid-template-columns: repeat(3, 1fr);
// 		grid-template-rows: 1fr;
// 		grid-column-gap: 0px;
// 		grid-row-gap: 0px;
// 	}
// `;

// const Filters = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	margin: 0 1rem 0.3rem;

// 	select {
// 		width: 100vh;
// 		padding: 0.5rem;
// 		border-radius: 0.4rem;
// 		margin: 0.1rem;
// 	}
// `;
