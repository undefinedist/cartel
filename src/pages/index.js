import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/sicario/Header'
import Fixed from '../components/sicario/Fixed'

const IndexPage = ({data}) => {
  const header = data.allContentfulPartner.edges[0].node.header
  console.log(header)

  return (
    <Fixed top right left z={100}>
      <Header
        bg="blue"
        text="예약하기"
        logoPx={[5]}
        src={`https://dummyimage.com/300x82/000/fff.png&text=${
          header.companyName
        }`}
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
          color: header.btnColor,
          bg: header.btnBg,
          px: header.btnPx,
        }}
      />
    </Fixed>
  )
}

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulPartner(filter: {name: {eq: "skywings"}}) {
      edges {
        node {
          id
          name
          header {
            companyName
            btnColor
            btnBg
            btnPx
          }
        }
      }
    }
  }
`
