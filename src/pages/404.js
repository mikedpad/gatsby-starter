import React, { Component } from 'react';
import ContentWrapper from '../components/contentWrapper';
import Layout from '../components/layout';

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <h1>404 - NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </ContentWrapper>
      </Layout>
    );
  }
}

export default NotFoundPage;
