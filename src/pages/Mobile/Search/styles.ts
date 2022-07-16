import styled from "styled-components";

export const FormSearchMovie = styled.form`
  padding: 2rem;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 0.5rem;
  display: flex;
  justify-content: center;

  input {
    height: 3rem;
    width: auto;
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    border: 2px solid #dc5cff;
    background-color: transparent;
    outline: none;
    color: #fefefe;
    width: 20rem;

    ::placeholder {
      color: #dc5cff;
    }
  }

  button {
    height: 3rem;
    width: 3rem;
    background-color: transparent;
    border: 0;
    border-radius: 0 50% 50% 0;
    color: #dc5cff;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s;
    margin-left: 1rem;

    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;
