import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { NavStyles, OptionStyles } from './styles/NavStyles';

const query = graphql`
{
  allStrapiCategory {
    nodes {
      id
      name
    }
  }
}

`

const CategoriesDropdown = () => {
  const {
  allStrapiCategory: { nodes },
} = useStaticQuery(query)


return (
<OptionStyles>
    <button type="button">
      Recettes
      <AiFillCaretDown />
    </button>
    <div className="categories">
      {nodes.map(item => (
        <div className="drops" key={item.id} >
          <li>
            <Link to={`/${item.name.split(' ').join("-")}` }>
             {item.name}
          </Link>
          </li>

</div>
      ))}
    </div>
  </OptionStyles>)
};
const Nav = () => (
  <NavStyles>
    <Link to="/">
      <li>
        Accueil
      </li>
    </Link>
    <Link to="/recipe">
      <ul>
        <CategoriesDropdown />
      </ul>
    </Link>
    <Link to="/about">
      <li>
        La Team
      </li>
    </Link>
    <Link to="/contact">
      <li>
        Contact
      </li>
    </Link>
    <Link to="/signup">
      <li>
        S'inscrire
      </li>
    </Link>
  </NavStyles>
);

export default Nav;
