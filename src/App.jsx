import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieImg from "./movie.svg";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=87f0865a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    // const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Movies");
  }, []);
  return (
    <>
      <div className="app">
        <div className="title-part">
          <h1>MovieLand</h1>
          <img src={MovieImg} alt="ICO" className="movieIco" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movie Found</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
