import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="movie-card-container">
      <div className="movie">
        <Link to={`/movie/${movie.id}`}>
          <img src={IMAGE_BASE + movie.poster_path} alt="" />
        </Link>
        <div className="movie-card-details">
          <h1>{movie.title}</h1>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
