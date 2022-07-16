import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SearchMovie from "./pages/Mobile/Search";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="search-movie" element={<SearchMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
