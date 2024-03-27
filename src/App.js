// import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import InputBox from "./Components/InputBox/InputBox";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import MoviePage from "./Components/MoviePage/MoviePage";

function App() {
  // const [search, setSearch] = useState("");

  // const searchMoviie = async (search) => {
  //   const url =
  //     `https://api.themoviedb.org/3/search/movie&api_key=7ec2da59f75a0204f0af5992719010a8`+ search;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson.Search) {
  //     setSearch(responseJson.Search);
  //   }
  // };

  // const [search, setSearch] = useState()
  // const [url_base, setUrl] = useState()

  //  async function searchMoviie() {
  //   await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7ec2da59f75a0204f0af5992719010a8`)
  //   if(evt.key === 'Enter'){
  //     url = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=7ec2da59f75a0204f0af5992719010a8'+search;
  //     setSearch(' ')
  //   }
  // }

  // useEffect(() => {
  //   searchMoviie(search);
  // }, [search]);

  return (
    <HashRouter>
    <div className="App">
      <div className="nav-container">
        <NavBar />
        <InputBox />
        {/* search={search} setSearch={setSearch} */}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movie/:movieId" element={<MoviePage/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
