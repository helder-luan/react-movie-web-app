import { FormEvent, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

function SearchMovie() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
  }

  return (
    <S.FormSearchMovie onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a movie"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </S.FormSearchMovie>
  );
}

export default SearchMovie;
