const siteMetadata = {
  title: `Gatsby Starter`,
  description: `A slightly different flavor of the Gatsby starter.`,
  author: `Michael Daniel Padilla`,
  siteUrl: `https://beyourownbossparty.com`,
  lang: `en-US`,
};

module.exports = {
  siteMetadata,
  pathPrefix: `/gatsby-starter`,
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        description: siteMetadata.description,
        lang: siteMetadata.lang,
        display: `minimal-ui`,
        short_name: `GatsbyStarter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2f3740`,
        icon: `src/images/favicon/icons-512.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/markdown/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        formats: [`woff2`, `woff`],
        useMinify: true,
        usePreload: false,
        usePreconnect: true,
        fonts: {
          google: [
            {
              family: `Source Sans Pro`,
              variants: [`300`, `400`, `700`],
              fontDisplay: `swap`,
            },
            {
              family: `Lora`,
              variants: [`300`, `400`, `400i`, `700`],
              fontDisplay: `swap`,
            },
            {
              family: `Source Code Pro`,
              variants: [`400`, `400i`, `700`],
              fontDisplay: `swap`,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              showCaptions: true,
              backgroundColor: `#222029`,
              quality: 60,
              withWebp: {
                quality: 80,
              },
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     // classPrefix: `language-`,
          //     // inlineCodeMarker: null,
          //     // aliases: {},
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //   },
          // },
        ],
      },
    },
  ],
};
