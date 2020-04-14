import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import SEO from "../components/SEO";


const aboutPage = () => {
  return (

    <div>
      <SEO title="About" />
<Hero img="/bcg.jpg" />
<Info />
    </div>
  )
}

export default aboutPage
