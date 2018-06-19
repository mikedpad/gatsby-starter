const siteData = {
  title: 'Default Site Title',
  description: 'A slightly different flavor of the Gatsby starter.',
  manifest: {
    colors: {
      background: '#ffffff',
      theme: '#639',
    },
    display: 'standalone',
    // icons: [
    //   {
    //     src: 'favicon.ico',
    //     sizes: '64x64 32x32 24x24 16x16',
    //     type: 'image/x-icon',
    //   },
    // ],
    shortTitle: 'DefaultSite',
    startUrl: '/',
  },
  // navigation: [
  //   {
  //     name: 'Home',
  //     href: '/',
  //   },
  //   {
  //     name: 'Page 2',
  //     href: 'page-2/',
  //   },
  // ],
};

module.exports = {
  siteMetadata: siteData,
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          './src/sass',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteData.title,
        short_name: siteData.manifest.shortTitle,
        description: siteData.description,
        start_url: siteData.manifest.startUrl,
        background_color: siteData.manifest.colors.background,
        theme_color: siteData.manifest.colors.theme,
        display: siteData.manifest.display,
      },
    },
  ],
};
