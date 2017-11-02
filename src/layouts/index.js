import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography';
import 'normalize.css';
import Navigation from '../components/navigation'

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="T R V P H I L L"
      meta={[
        {name: 'description', content: 'Official website of TRVPHILL'},
        {name: 'keywords', content: 'tacoma, olympia, washington, seattle, capitol hill, rap, trap, hip hop, music'},
      ]}
    />
    <Navigation/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
