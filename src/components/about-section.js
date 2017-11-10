import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { secondaryFont } from "../utils/fonts";
import SocialIcon from './social-icon'
import { lightColor, lightSecondaryColor } from '../utils/colors'
import { zoomOnHover } from '../utils/animation'
import { Desktop } from '../utils/responsive'

const AboutCard = (props) => (
    <div css={{ maxWidth: 300, margin: `${rhythm(1 / 2)} ${rhythm(1)}` }}>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: `0 ${rhythm(1 / 2)}` }}>
            <img css={{
                ...zoomOnHover,
                width: '100%',
                objectFit: 'fill',
                borderRadius: '50%',
                border: `${rhythm(1 / 3)} solid ${lightColor}`
            }}
                 src="http://via.placeholder.com/800x800" alt=""/>
        </div>

        <div css={{
            ...secondaryFont,
            textAlign: 'center',
            marginBottom: rhythm(3 / 2),
        }}>
            <div css={{
                marginBottom: rhythm(1 / 2),
                fontSize: rhythm(1),
                letterSpacing: rhythm(2 / 10),
            }}>{props.name}</div>

            <div css={{
                color: lightSecondaryColor,
                marginBottom: rhythm(1 / 2),
                fontSize: props.isMobile ? rhythm(9 / 10) : rhythm(6 / 10),
                letterSpacing: '2px',
            }}>{props.role}</div>
            <div css={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {props.children}
            </div>
        </div>
    </div>
)

AboutCard.propTypes = {
    nameTo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const AboutSection = (props) => (
    <Section id="about">
        <SectionTitle centered>About</SectionTitle>
        <p css={{
            textAlign: 'center',
            fontSize: rhythm(4 / 5),
            lineHeight: rhythm(1)
        }}>TRVPxHILL is a hip hop group based out of the Pacific Northwest.</p>
        <div css={{
            display: 'flex',
            flexDirection: props.isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            maxWidth: 1000,
        }}>
            <AboutCard isMobile={props.isMobile} nameTo='#' name='EssToo' role='Rapper'>
                <SocialIcon icon='soundcloud' link='#'/>
                <SocialIcon icon='bandcamp' link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
            <AboutCard isMobile={props.isMobile} nameTo='#' name='Xavier' role='Instrumentals'>
                <SocialIcon icon='soundcloud' link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
            <AboutCard isMobile={props.isMobile} nameTo='#' name='Sandy' role='Vocals'>
                <SocialIcon icon='youtube-play' title="youtube" link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
        </div>
    </Section>
)

const ResponsiveAbout = (props) =>
    <Desktop>{(matches) => <AboutSection isMobile={!matches} {...props}/>}</Desktop>

export default ResponsiveAbout;