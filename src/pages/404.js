
import { Link } from 'gatsby';
import React from 'react';
import Img from '../components/image';
import Layout from '../components/Layout';
import SEO from "../components/SEO";

const NotFoundPage= () =>   (
<Layout>
  <SEO title="404: NOT Found"/>
   <Img src='kid.jpg' alt="Not Found" title="Oups! Tu Fais du Hors Piste">
      <Link to="/" className="main-link" style={{ marginTop: '2rem' }}>
        Retour &Agrave; la maison
      </Link>
   </Img>

  </Layout>)


export default NotFoundPage
