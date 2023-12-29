import React from 'react';
import LogoIcon from '../../../assets/logo.svg';

import './styles.scss';

const Logo = () => {
	return (
		<div className='logo-container'>
			<img src={LogoIcon} className='icon' />
			<div className='title-container'>
				<p className='logo-title'>Movie</p>
				<p className='logo-sub-title'>FINDER</p>
			</div>
		</div>
	);
};

export default Logo;
