import React from 'react';

function Card(props) {
	const { title, text } = props.content;

	return (
		<div className="main__card">
			<h2 className="main__card-title">{title}</h2>
			<ul>
				{text.map((txt, index) => <li key={index}><p>{txt}</p></li>)}
			</ul>
		</div>
	)
}

export default Card;
