import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import content from "./data/content";
import "./App.scss";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Viewer from "./components/Viewer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(json => {
				this.setState({
					items: json,
					isLoaded: true
				});
			});
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header content={content.header} />
					<Navbar content={content.navbar} />
					<Switch>
						<Route
							exact path="/"
							render={routeProps => (<Main {...routeProps} content={content.home} />)}
						/>
						<Route
							exact path="/about"
							render={routeProps => (<Main {...routeProps} content={content.about} />)}
						/>
						<Route
							exact path="/contact"
							render={routeProps => (<Contact {...routeProps} content={content.contact} />)}
						/>
						<Route
							exact path="/viewer"
							render={routeProps => (<Viewer {...routeProps} content={this.state} />)}
						/>
					</Switch>
					<Footer content={content.contact} />
				</div>
			</Router>
		);
	}
}

export default App;
