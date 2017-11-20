import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'

const SocialIcon = (props) => (
    <div css={{ display: 'inline-block', padding: `0 ${rhythm(1 / 2)}` }}>
        <a href={props.link} title={props.title || props.icon} target='_blank'>
            <span className={`fa fa-${props.icon} fa-lg`} />
        </a>
    </div>
)

SocialIcon.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default SocialIcon;
