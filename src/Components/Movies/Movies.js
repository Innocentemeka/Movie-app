import { useEffect, useState } from "react";
import './Movies.css'
import axios from "axios";

import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const apiKey = "7ec2da59f75a0204f0af5992719010a8";
  const popular = "https://api.themoviedb.org/3/movie/popular";
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    axios.get(`${popular}?api_key=${apiKey}`).then((response) => {
      const result = response.data.results;
      console.log(result);
      setMovies(result);
    });
  }

  return (
    <div className="movie-container" id="/">
      {movies.map((items) => (
        <div className="movie">
          <h1>{items.title}</h1>
          <Link to='/card'>
          <img
            src={`${IMAGE_BASE}${items.poster_path}`}
            alt={`${items.title} Poster`}
          /></Link>
          <p>{items.release_data}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Movies;
