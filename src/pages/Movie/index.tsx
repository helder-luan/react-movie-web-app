import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieProps } from "../../types/Movie";
import axios, { AxiosResponse } from "axios";
import { apiKey, moviesURL } from "../../constants/apiURLs";
import MovieCard from "../../components/MovieCard";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import * as S from "./styles";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieProps>();

  async function getMovie(url: string) {
    const data = await axios.get(url).then((response: AxiosResponse) => {
      return response.data;
    });

    setMovie(data);
  }

  function formatCurrency(price: number) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;

    getMovie(movieURL);
  }, [id]);
  return (
    <S.MoviePage>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <S.TagLine>{movie.tagline}</S.TagLine>
          <S.Info>
            <h3>
              <BsWallet2 />
              Orçamento
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </S.Info>
          <S.Info>
            <h3>
              <BsGraphUp />
              Faturamento
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </S.Info>
          <S.Info>
            <h3>
              <BsHourglassSplit />
              Duração
            </h3>
            <p>{movie.runtime} min</p>
          </S.Info>
          <S.InfoDescription>
            <h3>
              <BsFillFileEarmarkTextFill />
              Descrição
            </h3>
            <p>{movie.overview}</p>
          </S.InfoDescription>
        </>
      )}
    </S.MoviePage>
  );
}

export default Movie;
