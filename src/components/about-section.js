import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { secondaryFont } from "../utils/fonts";
import SocialIcon from './social-icon'
import { lightColor, lightSecondaryColor } from '../utils/colors'
import { zoomOnHover } from '../utils/animation'
import { Desktop } from '../utils/responsive'
import imgXavier from './images/aboutx.jpg'
import imgSandy from './images/abouts.png'
import imgEsstoo from './images/aboute.jpg'

const AboutCard = (props) => (
    <div css={{ maxWidth: 300, margin: `${rhythm(1 / 2)} ${rhythm(3 / 2)}` }}>
        <div>
            <img css={{
                ...zoomOnHover,
                width: '100%',
                objectFit: 'fill',
                borderRadius: '50%',
                border: `${rhythm(1 / 4)} solid ${lightColor}`
            }}
                 src={props.image}
                 alt={props.name} />
        </div>

        <div css={{
            ...secondaryFont,
            textAlign: 'center',
            marginBottom: rhythm(3 / 2),
        }}>
            <div css={{
                marginBottom: rhythm(1 / 2),
                fontSize: rhythm(1),
                letterSpacing: rhythm(1 / 5),
            }}>{props.name}</div>

            <div css={{
                color: lightSecondaryColor,
                marginBottom: rhythm(1 / 2),
                fontSize: props.isMobile ? rhythm(9 / 10) : rhythm(3 / 4),
                letterSpacing: '2px',
            }}>{props.role}</div>

            <div css={{ width: '100%', marginTop: rhythm(2 / 5), display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {props.children}
            </div>
        </div>
    </div>
)

AboutCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const AboutSection = (props) => (
    <Section id="about">
        <SectionTitle centered>About</SectionTitle>
        <p css={{
            textAlign: 'center',
            fontSize: rhythm(4 / 5),
            lineHeight: rhythm(1),
            padding: `0 ${rhythm(1)}`
        }}>TRVPHILL is a hip hop group based out of the Pacific Northwest.</p>
        <div css={{
            display: 'flex',
            flexDirection: props.isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            maxWidth: 1000,
        }}>
            <AboutCard isMobile={props.isMobile} image={imgEsstoo} name='EssToo' role='Rapper'>
                <SocialIcon icon='soundcloud' link='https://soundcloud.com/esstoo'/>
                <SocialIcon icon='bandcamp' link='https://esstoo.bandcamp.com/releases'/>
                <SocialIcon icon='instagram' link='https://www.instagram.com/briskisit/'/>
            </AboutCard>
            <AboutCard isMobile={props.isMobile} image={imgSandy} name='Sandy' role='Vocals'>
                {/*<SocialIcon icon='youtube-play' title="youtube" link='#'/>*/}
                {/*<SocialIcon icon='facebook' link='#'/>*/}
                <SocialIcon icon='instagram' link='https://www.instagram.com/sbeaches5/'/>
            </AboutCard>
            <AboutCard isMobile={props.isMobile} image={imgXavier} name='Xavier' role='Producer'>
                <SocialIcon icon='instagram' link='https://www.instagram.com/dhayzoos/' />
            </AboutCard>
        </div>
    </Section>
)

const ResponsiveAbout = (props) =>
    <Desktop>{(matches) => <AboutSection isMobile={!matches} {...props}/>}</Desktop>

export default ResponsiveAbout;