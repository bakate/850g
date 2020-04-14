import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsy'
import React from 'react'


const ImageFetcher = (img) => {

  const getImage = useStaticQuery(graphql`
  query {
  image: file(relativePath: {eq: ${img}}){
    childImageSharp{
      fluid{
           ...GatsbyImageSharpFluid
      }
    }
  }
}
  `)
const {image: {childImageShapr:{fluid}}} = getImage
  return (
    <Image  fluid={fluid} />
  )
}

export default ImageFetcher
