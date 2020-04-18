import React from 'react';
import Image from '../components/image';
import Info from '../components/Info';
import SEO from "../components/SEO";

const aboutPage = () => {
  return (

    <div>
      <SEO title="About" />
<Image src="bcg.jpg" alt="background" />
<Info />
    </div>
  )
}

export default aboutPage
