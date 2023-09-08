import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

import './styles.scss';

import ContentWrapper from '../ContentWrapper';
import Logo from './Logo';

const Header = () => {
	const [show, setShow] = useState('top');
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const openSearchField = () => {
		setMobileMenu(false);
		setShowSearch(true);
	};
	const openMobileMenu = () => {
		setMobileMenu(true);
		setShowSearch(false);
	};

	return (
		<header className={`${mobileMenu ? ' mobile-view' : ''} ${show}`}>
			<ContentWrapper>
				<div>
					<Logo />
				</div>

				<ul className='menu-items'>
					<li className='menu-item'>Movies</li>
					<li className='menu-item'>TV Shows</li>
					<li className='menu-item'>
						<HiOutlineSearch />
					</li>
				</ul>

				<div className='mobile-menu-items'>
					<HiOutlineSearch />
					{mobileMenu ? (
						<VscChromeClose
							onClick={() => setMobileMenu(false)}
						/>
					) : (
						<SlMenu onClick={openMobileMenu} />
					)}
				</div>
			</ContentWrapper>
		</header>
	);
};

export default Header;
