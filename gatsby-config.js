const siteData = {
  title: `Gatsby Starter`,
  description: `A slightly different flavor of the Gatsby starter.`,
  manifest: {
    background_color: `#ffffff`,
    display: `minimal-ui`,
    icons: [],
    lang: `en-US`,
    short_name: `GatsbyStarter`,
    start_url: `/`,
    theme_color: `#2f3740`,
  },
};

module.exports = {
  siteMetadata: siteData,
  pathPrefix: `/gatsby-starter`,
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...siteData.manifest,
        name: siteData.title,
        description: siteData.description,
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
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            `Source Sans Pro:300,400,700`,
            `Source Code Pro:400,400i,700`,
            `Lora:300,400,400i,700`,
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
