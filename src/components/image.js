import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-background-image";
import React from "react";
import styled from 'styled-components';

const StyledBackgroundSection = styled(BcgImage)`
min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr;
place-content: center;
place-items: center;
  background-position: center;
  background-size: cover;
  width: 100%;
h1 {
color: var(--white);
font-weight: bold;
text-align: center;
font-size: 3rem;
text-transform: capitalize;
letter-spacing: var(--spacing);

}

`;
 function BcgImage({ src, alt, title, className, children }) {
  const { images } = useStaticQuery(graphql`
  query {
    images:allImageSharp
  {
    nodes {
      fluid(quality: 90, maxWidth: 1920) {
     ...GatsbyImageSharpFluid_withWebp
        originalName
      }
    }
  }
}`);

  const image = images.nodes.find(
    img => img.fluid.originalName === src
  );
  if (!image) {
    return null;
  }
  return (<Img fluid={image.fluid} alt={alt} className={className}>
   <h1>{title}</h1>
   {children}
  </Img>);
}

// objectFit = "cover"
BcgImage.defaultProps= {
  title: "850 Grammes",
}

export default StyledBackgroundSection;
