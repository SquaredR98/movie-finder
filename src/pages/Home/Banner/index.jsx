import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ContentWrapper from '../../../components/ContentWrapper';
import Image from '../../../components/LazyLoadImage';
import useFetch from '../../../hooks/useFetch';

import './styles.scss';

const Banner = () => {
	const navigateTo = useNavigate();
	const { url } = useSelector((state) => state.home);
	const [backgroundImage, setBackgroundImage] = useState('');
	const [query, setQuery] = useState('');

	const { data, loading } = useFetch('/movie/upcoming');

	const searchQueryHandler = (event) => {
		if (event.key === 'Enter' && query.length > 0) {
			navigateTo(`/search/${query}`);
		}
	};

	useEffect(() => {
		const bg =
			url?.backdrop +
			data?.results[Math.floor(Math.random() * data.results.length)]
				?.backdrop_path;
		setBackgroundImage(bg);
	}, [data]);

	return (
		<div className='hero-banner'>
			{!loading && (
				<div className='backdrop-image'>
					<Image src={backgroundImage} />
				</div>
			)}
			<div className='opacity-layer' />

			<ContentWrapper>
				<div className='wrapper'>
					<div className='hero-banner-content'>
						<span className='title'>Welcome</span>
						<span className='sub-title'>
							Millions of movies, TV shows and
							people to discover. Explore now.
						</span>
						<div className='search-input'>
							<input
								id=''
								name=''
								type='text'
								onChange={(event) =>
									setQuery(
										event.target.value,
									)
								}
								placeholder='Search for a movie or tv show...'
							/>
							<button
								type='button'
								onKeyUp={searchQueryHandler}
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Banner;
