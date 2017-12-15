import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import SocialIcon from './social-icon'

const Footer = () => (
    <div css={{ textAlign: 'center', margin: `${rhythm(5)} 0 ${rhythm(1)} 0` }}>
        <p css={{ marginTop: rhythm(1 / 2) }}>
            {/*<SocialIcon icon='soundcloud' link='https://soundcloud.com/trvphill' />*/}
            <SocialIcon icon='facebook' link='https://www.facebook.com/TRVPHILL/'/>
            <SocialIcon icon='instagram' link='https://www.instagram.com/trvphill/'/>
            {/*<SocialIcon title='e-mail' icon='envelope-o' link='#'/>*/}
        </p>

        <small css={{ opacity: 0.5, letterSpacing: rhythm(1 / 9), textTransform: 'uppercase' }}>
            &copy; {(new Date().getFullYear())} TRAP HILL. Favicon by{' '}
            <a css={{ opacity: 1 }} href="https://thenounproject.com/term/seattle/131555/"
               target="_blank">Fabien Jouin</a>.
        </small>

    </div>
)

Footer.propTypes = {}

export default Footer