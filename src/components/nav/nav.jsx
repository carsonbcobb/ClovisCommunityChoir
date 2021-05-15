import React from 'react';

import logo from '../../assets/home/nav-logo.png';

import './nav.styles.scss';

const Nav = () => (
	<nav id='nav'>
		<div class='nav__logo'>
			<img src={logo} />
		</div>
		<div class='nav__links'>
			<a href='#' class='nav__links--link'>
				Home
			</a>
			<a href='#' class='nav__links--link'>
				About
			</a>
			<a href='#' class='nav__links--link'>
				Events
			</a>
			<a href='#' class='nav__links--link'>
				Contact
			</a>
		</div>
	</nav>
);

export default Nav;
