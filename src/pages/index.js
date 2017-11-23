import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/sicario/Header'
import Fixed from '../components/sicario/Fixed'

const IndexPage = ({data}) => {
  const {header} = data.site.siteMetadata

  return (
    <Fixed top right left z={100}>
      <Header
        bg={header.color}
        text={header.button}
        logoPx={[5]}
        src="https://dummyimage.com/300x82/000/fff.png&text=UNDEF"
        logoWrapper={{
          px: [1, 1, 1, 2],
          py: [1, 1, 1, 1],
        }}
        btnWrapper={{
          px: [1, 1, 1, 2],
          py: [1, 1, 1, 1],
        }}
        btn={{
          fontSize: [1],
          color: 'white',
          bg: 'green',
          px: [5],
        }}
      />
    </Fixed>
  )
}

export default IndexPage

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        header {
          color
          button
        }
      }
    }
  }
`
