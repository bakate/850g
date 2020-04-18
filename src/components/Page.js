import PropTypes from 'prop-types';
import React from 'react';
import "../components/styles/global.css";
import Footer from './Footer';
import Header from './Header';

const Page = ({ children }) => (
    <section className="styledPage">
      <Header />
        <section className="inner">
        {children}
        </section>
      <Footer />
    </section>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
