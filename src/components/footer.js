import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import SocialIcon from './social-icon'

const Footer = () => (
    <div css={{ textAlign: 'center', margin: `${rhythm(5)} 0 ${rhythm(1)} 0` }}>
        <small css={{ opacity: 0.5, letterSpacing: rhythm(1 / 9) }}>
            TRVPHILL. &copy; COPYRIGHT {(new Date().getFullYear())}.
        </small>
        <div css={{ marginTop: rhythm(1 / 2) }}>
            {/*<SocialIcon icon='soundcloud' link='https://soundcloud.com/trvphill' />*/}
            <SocialIcon icon='facebook' link='https://www.facebook.com/TRVPHILL/' />
            <SocialIcon icon='instagram' link='https://www.instagram.com/trvphill/' />
            {/*<SocialIcon title='e-mail' icon='envelope-o' link='#'/>*/}
        </div>
    </div>
)

Footer.propTypes = {
}

export default Footer