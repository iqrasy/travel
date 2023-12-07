import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="/products" element={<Products />} /> */}
				<Route path="/services" element={<Services />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
