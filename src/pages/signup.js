import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from "../components/SEO";
import Title from '../components/Title';



const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const signupPage = () => (
  <Layout>
  <Column>
  <SEO title="Auth"/>
   <Title bgTitle="Enfin, cette page t'attendais depuis un bon moment"/>
  </Column>
  </Layout>
);

export default withAuthenticator(signupPage, true);
