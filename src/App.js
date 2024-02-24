import './App.css';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Routes, Route} from "react-router-dom";

import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import Plays from './pages/Plays';

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params ={};
// axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"]= "37e3c582";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<Plays />} />
    </Routes>
  );
}

export default App;
