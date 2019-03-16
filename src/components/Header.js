import React from 'react';
import './Header.scss';
	
function Header(props) {
	const { title, logo } = props.content;

	return (
		<div className="header">
			<div className="header__content">
				<img src={logo} alt="logo" className="header__logo"/>
				<h1 className="header__title">{title}</h1>
			</div>
		</div>
	)
}

export default Header;
