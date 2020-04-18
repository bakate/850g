import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";


export default function Image({ src, alt }) {
  const { images } = useStaticQuery(graphql`
  query {
    images:allImageSharp
  {
    nodes {
      fluid(maxWidth: 440) {
     ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
  return <Img fluid={image.fluid} alt={alt} />;
}

// objectFit = "cover"
