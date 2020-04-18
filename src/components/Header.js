import { Link } from "gatsby";
import React from 'react';
import Nav from './Nav';
import AutoComplete from './Search';
import { HeaderStyles, LogoStyles } from './styles/HeaderStyles';


const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <LogoStyles>
        <Link to="/">
          <div className="logo">
            <span className="span1">850</span>
            <span className="span2">grammes</span>
            <span className="span3">la vie dans la cuisine!</span>
          </div>
        </Link>
      </LogoStyles>
      <AutoComplete />
      <Nav />
    </div>
  </HeaderStyles>
);

export default Header;
