import { useContext } from "react";
import ModalContext from "../../../../contexts/ModalContext";
import { imageURL } from "../../../../constants/apiURLs";
import Tilt from "react-parallax-tilt";

import * as S from "./styles";

function Modal() {
  const { open, setOpen, source } = useContext(ModalContext);

  return (
    <S.Modal className={open ? "open" : ""} onClick={() => setOpen(false)}>
      {source != "" ? (
        <S.TiltStyled tiltReverse={true}>
          <img src={imageURL + source} alt="Poster" />
        </S.TiltStyled>
      ) : (
        <p>Houve um problema ao buscar a imagem</p>
      )}
    </S.Modal>
  );
}

export default Modal;
