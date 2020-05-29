module.exports = {
  siteMetadata: {
    title: `Mohammad's Portfolio`,
    description: ``,
    author: `Mohammad Ismail`,
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1833966,
        sv: 6
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammad's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        icon: `src/images/polymer.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
