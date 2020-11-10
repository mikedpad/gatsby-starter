import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import TestElement from '../TestElement';

const Images = () => {
  const data = useStaticQuery(graphql`
    query CatImageQuery {
      cat1: file(relativePath: { eq: "cat1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cat2: file(relativePath: { eq: "cat2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cat3: file(relativePath: { eq: "cat3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <TestElement id="embedded__images" title="Images">
      <h2>
        No <code>&lt;figure&gt;</code> element
      </h2>
      <Img fluid={data.cat1.childImageSharp.fluid} alt="Cat 1" />
      <h2>
        Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code>
      </h2>
      <figure>
        <Img fluid={data.cat2.childImageSharp.fluid} alt="Cat 2" />
      </figure>
      <h2>
        Wrapped in a <code>&lt;figure&gt;</code> element, with a{` `}
        <code>&lt;figcaption&gt;</code>
      </h2>
      <figure>
        <Img fluid={data.cat3.childImageSharp.fluid} alt="Cat 3" />
        <figcaption>Here is a caption for this image.</figcaption>
      </figure>
    </TestElement>
  );
};

export default Images;
