import React, { Component } from 'react';
import { Link } from 'gatsby';
import ContentWrapper from '../components/contentWrapper';
import Layout from '../components/layout';

class SecondPage extends Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to='/'>Go back to the homepage</Link>
        </ContentWrapper>
      </Layout>
    );
  }
}

export default SecondPage;
