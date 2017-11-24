require('dotenv').config()

module.exports = {
  siteMetadata: {
    partner: process.env.PARTNER,
    header: {
      color: `blue`,
      button: `world`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
  ],
}
