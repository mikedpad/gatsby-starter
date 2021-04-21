import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import TestElement from '../TestElement';

const Images = () => {
  const data = useStaticQuery(graphql`
    query CatImageQuery {
      cat1: file(relativePath: { eq: "cat1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, quality: 70)
        }
      }
      cat2: file(relativePath: { eq: "cat2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, quality: 70)
        }
      }
      cat3: file(relativePath: { eq: "cat3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, quality: 70)
        }
      }
    }
  `);

  return (
    <TestElement id="embedded__images" title="Images">
      <h2>
        No <code>&lt;figure&gt;</code> element
      </h2>
      <GatsbyImage image={data.cat1.childImageSharp.gatsbyImageData} alt="Cat 1" />
      <h2>
        Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code>
      </h2>
      <figure>
        <GatsbyImage image={data.cat2.childImageSharp.gatsbyImageData} alt="Cat 2" />
      </figure>
      <h2>
        Wrapped in a <code>&lt;figure&gt;</code> element, with a{` `}
        <code>&lt;figcaption&gt;</code>
      </h2>
      <figure>
        <GatsbyImage image={data.cat3.childImageSharp.gatsbyImageData} alt="Cat 3" />
        <figcaption>Here is a caption for this image.</figcaption>
      </figure>
    </TestElement>
  );
};

export default Images;
