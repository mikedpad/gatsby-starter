import React, { Component } from 'react';
import { Link } from 'gatsby';
import ContentWrapper from '../components/contentWrapper';
import Layout from '../components/layout';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to='/page-2/'>Go to page 2</Link>
        </ContentWrapper>
      </Layout>
    );
  }
}

export default IndexPage;
