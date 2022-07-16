import styled from "styled-components";

export const MovieCardStyled = styled.div`
  max-width: 22.5rem;
  max-height: 45rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1rem;
  border-radius: 4px;
  transition: 0.2s;

  img,
  h2,
  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    cursor: pointer;
  }

  svg {
    color: #f7d354;
  }

  a {
    background-color: #dc5cff;
    border: 2px solid #dc5cff;
    border-radius: 4px;
    color: #000;
    padding: 1rem 0.5rem;
    transition: 0.5s;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;

    :hover {
      background-color: transparent;
      color: #dc5cff;
    }
  }

  :hover {
    border: 2px solid #dc5cff;
    box-shadow: 0 0 0.2rem #fefefe, 0 0 0.2rem #fefefe, 0 0 2rem #dc5cff,
      0 0 0.8rem #dc5cff, 0 0 2.8rem #dc5cff, inset 0 0 1.3rem #dc5cff;
    transform: scale(1.05, 1.05);
  }
`;
