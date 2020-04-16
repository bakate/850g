import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import SEO from "../components/SEO";
import Title from '../components/Title';

export const Center = styled.div`
  text-align: center;
`;

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 60px;
  place-items: center;
  /* margin: 3rem auto; */
  /* max-width: ${({ theme }) => theme.maxWidth}; */
  @media (max-width: 576px) {
      grid-template-columns: 1fr;
      justify-content: center;
      margin: 0 auto;
    };
`;

 export const query = graphql`
query byCategory ($id:String) {
 category: strapiCategory(id: {eq: $id}) {
    name
    recettes {
      id
      title
      published
      url
      duration
       image {
        url
      }
    }
  }
}
`;

const Categories = ({data}) => {
  const  { category  } = data

  return (
    <Center>
      <SEO title={category.name}/>
      <Title bgTitle={category.name} center withRow />
      <ItemsList>
        {!category.recettes.length && (
          <Title title="Sorry, Pas de recettes pour le moment" center />
        )}
        {category.recettes.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </ItemsList>
    </Center>
  );
};

export default Categories;
