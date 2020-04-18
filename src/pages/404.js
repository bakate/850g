
import { Link } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import SEO from "../components/SEO";
import kid from "../images/kid.jpg";

const NotFoundPage= () => (
  <>
  <SEO title="404: NOT Found"/>
    <Hero img={kid}>
      <h2 style={{ textTransform: 'uppercase' }}>
        Oups! Tu Fais du Hors Piste{' '}
      </h2>
      <Link to="/" className="main-link" style={{ marginTop: '2rem' }}>
        Retour &Agrave; la maison
      </Link>
    </Hero>
  </>
);

export default NotFoundPage
