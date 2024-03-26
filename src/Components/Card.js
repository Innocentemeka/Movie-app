import { useEffect } from "react";


const Card = () => {
  
  

  const apiKey = "7ec2da59f75a0204f0af5992719010a8";
  const popular = "https://api.themoviedb.org/3/movie";
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w200";


  useEffect(() => {
    async function getMovieDetails(id) {
      const response = await fetch(`${popular}/${id}?api_key=${apiKey}`);
      const data = await response.json();
      return (data)
    }

    getMovieDetails()
  }, [])

  return (
    <div className="card-container">
      <img src={IMAGE_BASE.backdrop_path} alt="" />
    </div>
  );
};

export default Card;
