import styled from "styled-components";
import Tilt from "react-parallax-tilt";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  transition: 1s;

  &.open {
    display: flex;
  }
`;

export const TiltStyled = styled(Tilt)`
  img {
    box-shadow: 0 0 0.1rem #fefefe, 0 0 0.1rem #fefefe, 0 0 1rem cyan,
      0 0 0.4rem cyan, 0 0 1.4rem cyan, inset 0 0 0.675rem cyan;
    transition: 0.5s ease-out;
    width: 50vw;
    max-width: 400px;

    :hover {
      box-shadow: 0 0 0.2rem cyan, 0 0 0.2rem cyan, 0 0 2rem #fefefe,
        0 0 0.8rem #fefefe, 0 0 2.8rem #fefefe, inset 0 0 1.3rem #fefefe;
    }
  }
`;
