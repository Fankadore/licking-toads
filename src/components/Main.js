import React from 'react';
import './Main.scss';
import Card from './Card.js';

function Main(props) {
	const { cards } = props.content;

	return (
		<div className="main">
			{cards.map((card, index) => <Card key={index} content={card} />)}
		</div>
	)
}

export default Main;
