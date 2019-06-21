import React from 'react';
import './Header.scss';

function Header(props) {
	const { title, logo } = props.content;

	return (
		<div className="header">
			<img src={logo} alt="logo" className="header__logo" />
			<h1 className="header__title">{title}</h1>
		</div>
	)
}

export default Header;
