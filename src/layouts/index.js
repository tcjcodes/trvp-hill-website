import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography';
import 'normalize.css';
import favicon from './favicon.png'

const TemplateWrapper = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.spacedTitle}
            meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
        ><link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <div>
            {children()}
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.func,
}

export const query = graphql`
    query TemplateWrapperQuery {
        site {
            siteMetadata {
                spacedTitle,
                keywords,
                description,
            }
        }
    }
`

export default TemplateWrapper
