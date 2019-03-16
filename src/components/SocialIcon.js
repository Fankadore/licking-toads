import React from 'react';

function SocialIcon(props) {
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<span className={props.className + " " + props.iconClass}></span>
		</a>
	)
}

export default SocialIcon;
