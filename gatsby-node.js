const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  const partner = process.env.GATSBY_PARTNER

  return new Promise((resolve, reject) => {
    const mainTemplate = path.resolve('src/templates/main.js')
    createPage({
      path: '/',
      component: slash(mainTemplate),
      context: {
        partner: partner,
      },
    })
    resolve()
  })
}
