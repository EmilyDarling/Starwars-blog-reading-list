import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterDetailsPage } from "./views/characterDetailsPage";
import { PlanetDetailsPage } from "./views/planetDetailsPage";
import { VehicleDetailsPage } from "./views/vehicleDetailsPage";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					 <Routes> {/*only shows one of these routes at a time so this site stays a onepage application */}
						<Route path="/" element={<Home />} />
						<Route path="/characterDetailsPage/:nameId" element={<CharacterDetailsPage />} />
						<Route path="/planetDetailsPage/:nameId" element={<PlanetDetailsPage />} />
						<Route path="/vehicleDetailsPage/:nameId" element={<VehicleDetailsPage />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
