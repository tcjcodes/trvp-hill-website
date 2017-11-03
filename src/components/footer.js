import React from 'react'
import { rhythm } from '../utils/typography';

const Footer = () => (
    <div css={{ textAlign: 'center', padding: rhythm(1 / 4), marginTop: rhythm(5) }}>
        <p>

        </p>
        <small css={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: rhythm(1 / 9) }}>
            TRVPHILL. Copyright {(new Date().getFullYear())}.
        </small>
    </div>
)

export default Footer;