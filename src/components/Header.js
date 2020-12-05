import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  text-decoration: none;
  color: #dced31;
  font-size: 1.333em;
  margin-right: 1rem;
  &.current-page {
    border-bottom: 5px solid #dced31;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
const Header = () => {
  return (
    <header>
      <nav
        css={css`
          padding: 1rem;
          background-color: #363537;
          text-align: center;
          @media (min-width: 720px) {
            text-align: left;
          }
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/portfolio" activeClassName="current-page">
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="current-page">
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
