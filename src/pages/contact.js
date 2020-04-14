import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import SEO from "../components/SEO";
import contact from '../images/contact.jpg';

const FormStyles = styled.div`
  margin: 2rem auto;
  max-width: 800px;
  button {
    display: flex;
    justify-content: center;
    justify-self: center;
  }
`;

const AccountPage = () => (
  <>
  <SEO title="Contact"/>
    <Hero img={contact} title="Hello ✌😃" />
    <FormStyles>
      <Contact />
    </FormStyles>
  </>
);

export default AccountPage;
