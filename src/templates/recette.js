import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SEO from "../components/SEO";
import RecipeStyles from '../components/styles/RecipeStyles';
import Title from '../components/Title';
import cooking from '../images/cooking.svg';
import farm from '../images/farm.svg';

export const query = graphql`
  query SINGLE_RECIPE_QUERY($id: String) {
    recette: strapiRecette(id: {eq: $id}) {
      id
      title
      duration
      url
      cooking
      ingredients
      image {
        url
      }
      category {
        id
        name
      }
      published
    }
  }
`;

const Recipe = ({ data }) => {
  const { recette } = data
  const image = recette?.image;
  const [first, ...others] = image;
  const images = others.map((item, i) => (
    <img
      src={item.url}
      height="250"
      className="img_gallery"
      width="350"
      key={i}
      alt="gallery"
    />
  ));
  const { published } = recette;
  const good = Date.parse(published);

  return (
    <RecipeStyles>
<SEO  title={recette.title}/>
      <div>
        <Title title={recette.title} center withRow />
        <img src={first.url} alt={recette.title} className="hero" />
      </div>

      <div className="infos">
        <div>
          <div className="withLogo">
            <img src={farm} alt="logo" className="logo" />
            <Title title="ingredients:" withRow center />
          </div>
          <ReactMarkdown source={recette.ingredients} />
        </div>
        <div>
          <div className="withLogo">
            <img src={cooking} alt="logo" className="logo" />
            <Title title="preparation:" withRow center />
          </div>
          <ReactMarkdown source={recette?.cooking} />
        </div>
      </div>
      <div className="gallery">
        <Title title="plus de photos:" withRow center />
        <a target="_blank" href={recette?.url} rel="noopener noreferrer">
          {images}
        </a>
      </div>
      <div className="published">
        <Title title="recette publiee le:" center />
        <span>
          {new Intl.DateTimeFormat('fr', {
            dateStyle: 'long',
          }).format(good)}
        </span>
      </div>
    </RecipeStyles>
  );
};

export default Recipe;
