import { ReactElement, useContext } from "react";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MovieProps } from "../../types/Movie";
import { imageURL } from "../../constants/apiURLs";
import ModalContext from "../../contexts/ModalContext";

import * as S from "./styles";

function MovieCard({
  movie,
  showLink = true,
}: {
  movie: MovieProps;
  showLink: boolean;
}): ReactElement {
  const { setOpen: setOpenModal, setSource } = useContext(ModalContext);

  return (
    <S.MovieCardStyled id="movie_card">
      <img
        onClick={() => {
          setSource(movie.poster_path);
          setOpenModal(true);
          console.log("imagem clicada");
        }}
        src={imageURL + movie.poster_path}
        alt={movie.title}
        loading="lazy"
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </S.MovieCardStyled>
  );
}

export default MovieCard;
