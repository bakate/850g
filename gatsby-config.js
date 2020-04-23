// const queries = require("./src/lib/algolia")
require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: `850 Grammes`,
    description: `Site de Recettes`,
    author: `@bakate`,
    twitterUsername: "@bakateba",
    image: "/bcg.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
      // Source the Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://darmiton-react.herokuapp.com",

        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "category",
          "recette",
        ],
        queryLimit: 1000,
      },
    },
  //   {
  //     resolve: `gatsby-plugin-algolia`,
  //     options: {
  //       appId: process.env.ALGOLIA_APP_ID,
  //       apiKey: process.env.ALGOLIA_ADMIN_KEY,
  //       indexName: process.env.ALGOLIA_INDEX_NAME,
  //       queries,
  //       chunkSize: 10000, // default: 1000

  //   },
  // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {

      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `850 Grammes`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the sit
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}
