import { Link } from "gatsby";
import React from 'react';
// import Router from 'next/router';
// import NProgress from 'nprogress';
import Nav from './Nav';
import AutoComplete from './Search';
import { HeaderStyles, LogoStyles } from './styles/HeaderStyles';


// Router.onRouteChangeStart = () => {
//   NProgress.start();
// };
// Router.onRouteChangeComplete = () => {
//   NProgress.done();
// };

// Router.onRouteChangeError = () => {
//   NProgress.done();
// };

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <LogoStyles>
        <Link to="/">
          <div>
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
