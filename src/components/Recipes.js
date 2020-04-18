import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Center, ItemsList } from '../templates/category';
import Card from './Card';
import Title from './Title';

const Recipes = () => {

const data = useStaticQuery(graphql`
query  {
  allStrapiRecette(limit: 6) {
     recettes:nodes {
      id
      title
      duration
       category{difficulty}
      image {
        url
      }
    }
  }
}
`)


const {recettes} = data ? data.allStrapiRecette : []
 return  ( <Center>
    <Title bgTitle="decouvrez rapidement nos 6 dernieres recettes..." center />
    <ItemsList>
      {recettes.map(recipe => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </ItemsList>
  </Center>)
      };
export default Recipes;
