/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieOrShowDetails from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import Explore from "./pages/Explore";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
		genres();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genres = async () => {
    let promises = [],
      endPoints = ["tv", "movie"],
      allGenres = {};
    endPoints.forEach((url) =>
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    );

    const data = await Promise.all(promises);
    data.map(({ genres }) =>
      genres.map((item) => (allGenres[item.id] = item.name))
    );
		dispatch(getGenres(allGenres))
	};

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<MovieOrShowDetails />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
