import React from 'react';
import './Navbar.scss';
import NavbarItem from './NavbarItem';

function Navbar(props) {
	const { items } = props.content;
	
	return (
		<ul className="navbar">
			{items.map((item, index) => <NavbarItem key={index} link={item.link} label={item.label} iconClass={item.iconClass} />)}
		</ul>
	)
}

export default Navbar;
