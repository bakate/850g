import React from 'react';
import Image from '../components/image';
import Info from '../components/Info';
import Layout from '../components/Layout';
import SEO from "../components/SEO";

const aboutPage = () => {
  return (

    <Layout>
      <SEO title="About" />
<Image src="bcg.jpg" alt="background" />
<Info />
    </Layout>
  )
}

export default aboutPage
