import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {ThemeProvider} from 'styled-components'
import theme from '../../theme.json'

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <ThemeProvider theme={theme}>{children()}</ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
