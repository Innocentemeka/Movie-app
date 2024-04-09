import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import "./HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState();

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

  function handlesearchMovie(event) {
    if (event.key === "Enter") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}` +
          searchMovie
      );
      setSearchMovie("");
    }
  }

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  return (
    <div>
      <div className="input-box-container">
        <div>
        <h1>MOVIES</h1>
        </div>
        <form>
        <input
          type="text"
          placeholder="Search"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button onClick={handlesearchMovie}>Search</button>
        </form>
      </div>
      <div className="home-page-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
