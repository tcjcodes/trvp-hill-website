import React from 'react'
import { rhythm } from '../utils/typography';
import SocialIcon from './social-icon'

const Footer = () => (
    <div css={{ textAlign: 'center', marginTop: rhythm(5) }}>
        <small css={{ opacity: 0.5, letterSpacing: rhythm(1 / 9) }}>
            TRVPxHILL. &copy; COPYRIGHT {(new Date().getFullYear())}.
        </small>
        <div css={{ marginTop: rhythm(1 / 2) }}>
            <SocialIcon icon='soundcloud' link='#'/>
            <SocialIcon icon='facebook' link='#'/>
            <SocialIcon title='e-mail' icon='envelope-o' link='#'/>
        </div>
    </div>
)

export default Footer;