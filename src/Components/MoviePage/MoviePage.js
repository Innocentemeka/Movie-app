import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const IMAGE_BASE = "https://image.tmdb.org/t/p/w200";

  async function getMovie(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    getMovie(movieId)
      .then((response) => {
        setLoading(false);
        setMovie(response);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  });

  if (loading) {
    <div>Loading... Please wait!</div>;
  }

  return (
    <div className="movie-page-container">
      {<img src={IMAGE_BASE + movie.backdrop_path} alt="" />}
      <div className="movie-page-details">
        <h2>{movie.title}</h2>
        <p>{movie.original_language}</p>
        <h3>{movie.overview}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MoviePage;
