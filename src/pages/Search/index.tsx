/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { apiKey, searchURL } from "../../constants/apiURLs";
import { TypeTopRatedMovies } from "../../types/Movie";

import * as S from "../../styles/MoviesGrid";

function Search() {
  const [loading, setLoanding] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<TypeTopRatedMovies>([]);
  const query = searchParams.get("q");

  async function getSearchedMovies(url: string) {
    setLoanding(true);
    const data = await axios.get(url).then((response: AxiosResponse) => {
      return response.data.results;
    });
    setLoanding(false);

    setMovies(data);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <S.Container>
      <S.TitleContainer>
        Resultados para: <S.QueryText>{query}</S.QueryText>
      </S.TitleContainer>
      <S.MoviesContainer>
        {loading && <p>Carregando...</p>}
        {loading === false && movies.length === 0 ? (
          <p>Nenhum filme encontrado</p>
        ) : null}
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} showLink />;
        })}
      </S.MoviesContainer>
    </S.Container>
  );
}

export default Search;
