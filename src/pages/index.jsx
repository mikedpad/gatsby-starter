import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from '../components/Link';
import TableOfContents from '../components/TestElements/TableOfContents';
import Text from '../components/TestElements/Elements/Text';
import Embedded from '../components/TestElements/Elements/Embedded';
import Form from '../components/TestElements/Elements/Form';

const PageHeadline = styled.h1`
  color: #fff;
`;

const IndexPage = () => {
  return (
    <Layout>
      <header role="banner">
        <PageHeadline>Content Test Page</PageHeadline>
        <p>
          This is a test page filled with common HTML elements wrapped in React components… but
          rather than be used to build CSS styles, these elements are just fodder for
          demonstrational purposes.
        </p>
      </header>
      <TableOfContents />
      <main role="main">
        <Text />
        <Embedded />
        <Form />
      </main>
      <footer role="contentinfo">
        <p>
          Modified by <Link to="https://github.com/mikedpad">Michael Daniel Padilla</Link>.
        </p>
        <p>
          Forked from{` `}
          <Link to="https://github.com/cbracco/html5-test-page">HTML5 Test Page</Link>.
        </p>
      </footer>
    </Layout>
  );
};

export default IndexPage;
