module.exports = {
  siteMetadata: {
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
        spaceId: `fmalotl17hvn`,
        accessToken: `4659339626f3e1a82ac104382b1db91cba987faeec24040274a163b68e95f289`,
      },
    },
  ],
}
