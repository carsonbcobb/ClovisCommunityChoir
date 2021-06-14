import React from 'react';
import Nav from '../nav/nav';
import MobileNav from '../mobileNav/mobileNav';

const SelectNav = () => {
	return (
		<div>
			<Nav className='desktop-nav' />
			<MobileNav className='mobile-nav' />
		</div>
	);
};

export default SelectNav;
