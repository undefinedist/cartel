import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/sicario/Header'

const IndexPage = () => (
  <Header
    bg="red"
    text="hello"
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
    }}>
    hello
  </Header>
)

export default IndexPage
