import Footer from "./Footer";
import Header from "./Header";
import Services from "./services/Services";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
