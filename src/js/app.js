import React from "react";

//import your own components
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/cards";

const carta = {
	image: "/workspace/react-hello/src/img/rigo-baby.jpg",
	alt: "rigo",
	title: "Hello Rigo",
	description: "loesks kjsskkskkskkss",
	url: "http://wikipedia.com",
	button: "click here"
};

//crear Layout esqueleto
export function App() {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Cards card={carta} />
			</div>
		</div>
	);
}
