import React from 'react';
import Slide from './Slide';
import "./Main.scss";

function Viewer(props) {
	let { items, isLoaded } = props.content;

	if (isLoaded) {
		return (
			<div className="main">
				{items.map((item, index) => <Slide key={index} content={item} />)}
			</div>
		);
	}
	else {
		return <div className="main">Loading...</div>;
	}
}

export default Viewer;
