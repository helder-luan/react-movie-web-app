import styled from "styled-components";

export const Drawer = styled.section`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  background-color: rgba(0, 0, 0, 0.3);

  &.open {
    display: block;
    width: 100vw;
  }
`;

export const Menu = styled.div`
  max-width: 600px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
  color: #bc5cff;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.card};

  svg {
    margin-right: 2rem;
  }
`;

export const Limiter = styled.div`
  max-height: 600px;
  overflow-y: scroll;
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 2rem 0;
`;

export const Items = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 90%;
  border-bottom: 1px solid #dc5cff;
  color: #dc5cff;
  transition: 0.5s;

  :hover {
    color: #efefef;
    background-color: #dc5cff;
    width: 95%;
    border-radius: 0 4px 4px 0;

    a {
      color: #efefef;
    }
  }
`;
