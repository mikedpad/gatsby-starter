import React from 'react';
import Layout from '../components/Layout';
import SiteLink from '../components/SiteLink';

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <SiteLink to="/">Go back to the homepage</SiteLink>
  </Layout>
);

export default SecondPage;
