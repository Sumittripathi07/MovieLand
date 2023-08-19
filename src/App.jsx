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
  const [errorMessage, setErrorMessage] = useState("");

  const searchMovies = async (title) => {
    if (!title) {
      setErrorMessage("Enter a movie name!");
      setMovies([]); // Clear movies
      return;
    }

    setErrorMessage(""); // Clear error message
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
      setErrorMessage("No Movie Found");
    }
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

        {/* Display error message */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default App;