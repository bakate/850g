import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Image from '../components/image';
import Layout from '../components/Layout';
import SEO from "../components/SEO";

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
  <Layout>
  <SEO title="Contact"/>
    <Image src="contact.jpg" alt="contact" title="Une Question ?"/>
    <FormStyles>
      <Contact />
    </FormStyles>
  </Layout>
);

export default AccountPage;
