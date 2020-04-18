import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./styles/global.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <article className="inner">
      {children}
    </article>
    <Footer />
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
