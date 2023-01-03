import { Route, Routes } from "react-router-dom";
import Header from "../Components/header";
import About from "../Page/about";
import Home from "../Page/home";

const Router = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<About />} />
			</Routes>
		</>
	);
};
export default Router;
