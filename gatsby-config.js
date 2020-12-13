/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'First Choice Pest Control',
    phoneNumber: '4013327084',
    description: 'Commercial and Residential Pest Control',
  },
  plugins: [
    'gatsby-theme-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FirstChoicePestControl`,
        short_name: `FirstChoicePestControl`,
        start_url: `/`,
        background_color: `#3f51b5`,
        theme_color: `#3f51b5`,
        display: `standalone`,
        icon: 'src/images/termite.png',
        icon_options: {
          purpose: 'maskable',
        },
      },
    },
    'gatsby-plugin-offline',
  ],
}
