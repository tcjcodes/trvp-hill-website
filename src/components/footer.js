import React from 'react'
import { rhythm } from '../utils/typography';
import SocialIcon from './social-icon'

const Footer = () => (
    <div css={{ textAlign: 'center', marginTop: rhythm(4) }}>
        <small css={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: rhythm(1 / 9) }}>
            TRVPHILL, &copy; Copyright {(new Date().getFullYear())}.
        </small>
        <p css={{ marginTop: rhythm(1 / 2), marginBottom: 0 }}>
            <SocialIcon icon='soundcloud' link='#'/>
            <SocialIcon icon='facebook' link='#'/>
        </p>
    </div>
)

export default Footer;