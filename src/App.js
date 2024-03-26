// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputBox from "./Components/InputBox/InputBox";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";
import Card from "./Components/Card";

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
    <BrowserRouter>
    <div className="App">
      <div className="nav-container">
        <NavBar />
        <InputBox />
        {/* search={search} setSearch={setSearch} */}
      </div>
      <Routes>
        <Route path="/" element={<Movies />}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
