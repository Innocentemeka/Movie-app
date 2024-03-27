import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import "./HomePage.css";


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
  }

  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovies(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
