import React from 'react';
import Slide from './Slide';
import "./Main.scss";

function Viewer(props) {
	let { items } = props;

	if (!items) {
		return <div className="main">Loading...</div>;
	}
	else if (items.length === 0) {
		return <div className="main">No items to display</div>
	}
	else {
		return (
			<div className="main">
				{items.map((item, index) => <Slide key={index} content={item} />)}
			</div>
		);
	}
}

export default Viewer;
