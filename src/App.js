import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MoviePage from "./Components/MoviePage/MoviePage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
