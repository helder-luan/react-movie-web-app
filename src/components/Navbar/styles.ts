import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.card};

  h2 {
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media screen and (max-width: 648px) {
      display: none;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
    position: relative;

    input {
      height: 2rem;
      padding: 0.2rem 0.8rem;
      border-radius: 20px;
      border: 2px solid #dc5cff;
      background-color: transparent;
      outline: none;
      color: ${({ theme }) => theme.colors.text};
      width: 20rem;

      ::placeholder {
        color: #dc5cff;
      }

      @media screen and (max-width: 648px) {
        display: none;
      }
    }

    button {
      height: 2rem;
      background-color: transparent;
      position: absolute;
      right: 0;
      border: 0;
      border-radius: 0 50% 50% 0;
      color: #dc5cff;
      padding: 0.3rem;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;

      @media screen and (max-width: 648px) {
        display: none;
      }
    }
  }
`;

export const ButtonOpenDrawer = styled.button`
  background: 0;
  border: 0;
  font-size: 2rem;

  svg {
    color: #bc5cff;
  }

  @media screen and (min-width: 649px) {
    display: none;
  }
`;
