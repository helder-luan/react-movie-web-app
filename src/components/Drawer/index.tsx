import { BiCameraMovie, BiSearch, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

import * as S from "./styles";

function Drawer({
  optionDrawer,
}: {
  optionDrawer: {
    openDrawer: boolean;
    handleStateDrawer: () => void;
  };
}) {
  const { openDrawer, handleStateDrawer } = optionDrawer;
  return (
    <S.Drawer className={openDrawer ? "open" : ""}>
      <S.Menu>
        <S.Title>
          <BiMenu onClick={handleStateDrawer} /> Movie Library
        </S.Title>

        <S.Limiter>
          <S.ListItems>
            <S.Items>
              <h2>
                <Link onClick={handleStateDrawer} to="/">
                  <BiCameraMovie />
                  Home
                </Link>
              </h2>
            </S.Items>
            <S.Items>
              <h2>
                <Link onClick={handleStateDrawer} to="/search-movie">
                  <BiSearch /> Search
                </Link>
              </h2>
            </S.Items>
          </S.ListItems>
        </S.Limiter>
      </S.Menu>
    </S.Drawer>
  );
}

export default Drawer;
