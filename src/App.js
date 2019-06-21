import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import content from "./data/content";
import "./App.scss";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Viewer from "./components/Viewer";

function App(props) {
	const [items, setItems] = useState(null);

	const fetchData = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(json => setItems(json));
	};

	// Render
	const renderHome = () => {
		return <Main content={content.home} />
	};
	const renderAbout = () => {
		return <Main content={content.about} />
	};
	const renderViewer = () => {
		return <Viewer items={items} />
	};
	const renderContact = () => {
		return <Contact content={content.contact} />
	};

	useEffect(fetchData, []);

	return (
		<Router>
			<div className="App">
				<Header content={content.header} />
				<Navbar content={content.navbar} />
				<Switch>
					<Route exact path="/" render={renderHome} />
					<Route exact path="/about" render={renderAbout} />
					<Route exact path="/viewer" render={renderViewer} />
					<Route exact path="/contact" render={renderContact} />
				</Switch>
				<Footer content={content.contact} />
			</div>
		</Router>
	);
}

export default App;
