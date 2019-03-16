import React from 'react';
import './Footer.scss';
import SocialIcon from './SocialIcon';

function Footer(props) {
	const { copyright, channels } = props.content;

	return (
		<div className="footer">
		<p className="footer__text">{copyright}</p>
		{channels.map((channel, index) => <SocialIcon key={index} className="footer__icon" iconClass={channel.iconClass} link={channel.link} />)}
	</div>
	)
}

export default Footer;
