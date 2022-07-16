import styled from "styled-components";

export const SwitchThemeButton = styled.div`
  height: 0.75rem;
  width: 4rem;
  border-radius: 1.5rem;
  border: 2px solid #dc5cff;
  background-color: #b638d9;
  display: flex;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    border: 0;
    background-color: #dc5cff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;

    svg {
      font-size: 1.25rem;
    }

    &.dark {
      svg {
        color: #fefefe;
      }
      left: -0.875rem;
      transform: rotate(0deg);
      background-color: #dc5cff;
    }

    &.light {
      svg {
        color: #b638d9;
      }
      left: calc(5rem - 2rem);
      transform: rotate(720deg);
      background-color: #fefefe;
    }
  }
`;
