import styled from "styled-components";

export const MoviePage = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 2rem auto;

  @media screen and (max-width: 648px) {
    margin: 2rem;
  }

  div:first-child {
    width: 65%;
    margin: 0 auto;
    text-align: center;
    background-color: transparent;

    img,
    h2,
    p {
      margin-bottom: 1rem;
    }

    svg {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }

    :hover {
      border: none;
      box-shadow: none;
      transform: none;
    }
  }
`;

export const TagLine = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  margin-bottom: 1.5rem;
  svg {
    font-size: 1.5rem;
    color: #dc5cff;
  }

  h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const InfoDescription = styled.div`
  margin-bottom: 10rem;

  svg {
    font-size: 1.5rem;
    color: #dc5cff;
  }

  h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.4rem;
  }
`;
