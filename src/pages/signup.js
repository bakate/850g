import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from "../components/SEO";
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const signupPage = () => (
  <Layout>
  <Column>
  <SEO title="Auth"/>
    <Signup />
    <Signin />
  </Column>
  </Layout>
);

export default signupPage;
