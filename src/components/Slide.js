import React from 'react';

function Slide(props) {
	const { name, email, website } = props.content;

	return (
		<div className="main__slide">
			<p className="main__slide-text">{name}</p>
			<p className="main__slide-text">{email}</p>
			<p className="main__slide-text">{website}</p>
		</div>
	)
}

export default Slide;
