module.exports = {
  siteMetadata: {
    title: `No Starz`,
    description: `NoStarz`,
    author: `@tomWritesCode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NoStarz`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2c3965`,
        theme_color: `#2c3965`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
