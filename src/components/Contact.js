import React from 'react';
import './Main.scss';
import Card from './Card.js';

function Contact(props) {
	const { channels } = props.content;
	
	const contactDetails = {
		title: "Contact Us",
		text: channels.map(channel => `${channel.name}: ${channel.linkText}`)
	}

	return (
		<div className="main">
			<Card content={contactDetails} />
		</div>
	)
}

export default Contact;
