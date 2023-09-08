/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieOrShowDetails from './pages/Details';
import SearchResult from './pages/SearchResult';
import Explore from './pages/Explore';
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchApiConfig();
	}, []);

	const fetchApiConfig = () => {
		fetchDataFromApi('/configuration').then((res) => {
			const url = {
				backdrop: res.images.secure_base_url + 'original',
				poster: res.images.secure_base_url + 'original',
				profile: res.images.secure_base_url + 'original',
			};
			dispatch(getApiConfiguration(url));
		});
	};

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/:mediaType/:id'
					element={<MovieOrShowDetails />}
				/>
				<Route
					path='/search/:query'
					element={<SearchResult />}
				/>
				<Route
					path='/explore/:mediaType'
					element={<Explore />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
