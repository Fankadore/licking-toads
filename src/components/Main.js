import React from 'react';
import './Main.scss';
import Card from './Card.js';

function Main(props) {
	const { items } = props.content;

	return (
		<div className="main">
			{items.map((item, index) => <Card key={index} content={item} />)}
		</div>
	)
}

export default Main;
