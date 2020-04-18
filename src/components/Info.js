import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
import Title from './Title';

const InfoStyles = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-areas: 'content1 content2';
  gap: 1rem;
  place-content: center space-between;
  place-items: center stretch;
  .bloc {
    grid-area: 'content1';
    padding-top: 3rem;

  }
  .bloc2 {
    grid-area: 'content2';
  }
  @media (max-width: 700px) {
    grid-template-areas:
      'content1'
      'content2';
    .bloc {
      grid-area: 'content1';
    justify-content: center;
        /* width: 100%;
        height: 250px; */
    }
  }
`;

const Info = () => (
  <InfoStyles>
    <div className="bloc">
      <Image src="chicken.jpg" alt="about page"/>
    </div>
    <div className="bloc2">
      <Title title="A propos de nous" />
      <blockquote>
        <b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quisquam molestiae similique non quas minima culpa ab odit, quaerat
          tenetur rerum deleniti quos nisi officiiss!
        </b>
      </blockquote>
      <blockquote>
        <b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quisquam molestiae similique non quas minima culpa ab odit, quaerat
          tenetur rerum deleniti quos nisi officiis!
        </b>
      </blockquote>
      <Link to="/" className="main-link">
      Nos Recettes
      </Link>
    </div>
  </InfoStyles>
);

export default Info;
