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
      </div>
    </div>
  );
};

export default MovieCard;
