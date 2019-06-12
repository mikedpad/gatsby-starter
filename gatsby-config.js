const siteData = {
  title: `Gatsby Starter`,
  description: `A slightly different flavor of the Gatsby starter.`,
  manifest: {
    background_color: `#ffffff`,
    theme_color: `#2f3740`,
    display: `standalone`,
    icons: [
      // {
      //   src: 'favicon.ico',
      //   sizes: '64x64 32x32 24x24 16x16',
      //   type: 'image/x-icon',
      // },
    ],
    shortTitle: `GatsbyStarter`,
    startUrl: `/`,
  },
};

module.exports = {
  siteMetadata: siteData,
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // useMozJpeg: false,
        stripMetadata: true,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteData.title,
        description: siteData.description,
        short_name: siteData.manifest.shortTitle,
        start_url: siteData.manifest.startUrl,
        background_color: siteData.manifest.background,
        theme_color: siteData.manifest.theme_color,
        lang: `en-US`,
        icons: [],
      },
    },
    `gatsby-plugin-offline`,
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
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
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
