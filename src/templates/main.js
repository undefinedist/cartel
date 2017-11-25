import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/sicario/Header'
import Fixed from '../components/sicario/Fixed'
import ReactDisqusThread from 'react-disqus-thread'
const partner = process.env.GATSBY_PARTNER

const IndexPage = props => {
  const header = props.data.allContentfulPartner.edges[0].node.header
  return (
    <div>
      <Fixed top right left z={100}>
        <Header
          bg="blue"
          text={header.btnText}
          logoPx={[5]}
          src={header.logo.file.url}
          logoWrapper={header.logoWrapper}
          btnWrapper={header.btnWrapper}
          btn={header.btn}
        />
      </Fixed>
      <ReactDisqusThread
        style={{marginTop: '100px'}}
        shortname={partner}
        title="Example Thread"
      />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query allContentfulPartner($partner: String!) {
    allContentfulPartner(filter: {name: {eq: $partner}}) {
      edges {
        node {
          id
          name
          header {
            bg
            btnText
            companyName
            logoWrapper {
              px
              py
            }
            btnWrapper {
              px
              py
            }
            logo {
              file {
                url
              }
            }
            btn {
              bg
              px
              color
              fontSize
            }
          }
        }
      }
    }
  }
`
