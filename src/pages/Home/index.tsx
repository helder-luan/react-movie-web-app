import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { MovieProps, TypeTopRatedMovies } from "../../types/Movie";
import MovieCard from "../../components/MovieCard";
import { apiKey, moviesURL } from "../../constants/apiURLs";

import * as S from "../../styles/MoviesGrid";

function Home() {
  const [topMovies, setTopMovies] = useState<TypeTopRatedMovies>([]);

  async function getTopRatedMovies(url: string) {
    const data = await axios.get(url).then((response: AxiosResponse) => {
      return response.data.results;
    });

    setTopMovies(data);
  }

  useEffect(() => {
    const TopRatedURL = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(TopRatedURL);
  }, []);

  return (
    <S.Container>
      <S.TitleContainer>Best Movies</S.TitleContainer>
      <S.MoviesContainer>
        {topMovies.length === 0 ? (
          <p>Loading...</p>
        ) : (
          topMovies.map((movie: MovieProps) => {
            return <MovieCard key={movie.id} movie={movie} showLink />;
          })
        )}
      </S.MoviesContainer>
    </S.Container>
  );
}

export default Home;
