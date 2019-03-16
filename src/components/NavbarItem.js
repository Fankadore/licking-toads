import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarItem(props) {
	return (
		<li>
			<NavLink exact to={props.link} className="navbar__link" activeClassName="navbar__link--active">
				<span className={"navbar__link-icon " + props.iconClass}></span>
				<p className="navbar__link-label">{props.label}</p>
			</NavLink>
		</li>
	)
}

export default NavbarItem;
