import styled from "styled-components";

export const Container = styled.div``;

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 2rem 1rem;

  .query_text {
    color: #dc5cff;
  }
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  gap: 2.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const QueryText = styled.span`
  color: #dc5cff;
`;
