import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { GlobalStyles, Inner, StyledPage, theme } from './styles/GlobalStyles';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyles />
      <Header />
        <Inner>
        {children}
        </Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
