import React from 'react';
import { MdMovieFilter } from 'react-icons/md';

import './styles.scss';

const Logo = () => {
	return (
		<div className='logo-container'>
			<MdMovieFilter className='icon' />
			<div className='title-container'>
				<p className='logo-title'>Movie</p>
				<p className='logo-sub-title'>FINDER</p>
			</div>
		</div>
	);
};

export default Logo;
