import { FormEvent, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2, BiMenu } from "react-icons/bi";
import SwitchThemeButton from "./Components/SwitchThemeButton";

import * as S from "./styles";

function Navbar({ handleStateDrawer }: { handleStateDrawer: () => void }) {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
  }

  return (
    <S.Navbar>
      <S.ButtonOpenDrawer onClick={handleStateDrawer}>
        <BiMenu />
      </S.ButtonOpenDrawer>
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Home
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
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
      </form>
      <SwitchThemeButton />
    </S.Navbar>
  );
}

export default Navbar;
