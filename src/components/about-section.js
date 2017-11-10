import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { secondaryFont } from "../utils/fonts";
import SocialIcon from './social-icon'
import { lightColor, lightSecondaryColor } from '../utils/colors'
import { zoomOnHover } from '../utils/animation'

const AboutCard = (props) => (
    <div css={{ margin: `${rhythm(1 / 2)} ${rhythm(3 / 2)}`, maxWidth: '400px' }}>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: `0 ${rhythm(1 / 2)}` }}>
            <img css={{
                ...zoomOnHover,
                width: '80%',
                objectFit: 'fill',
                borderRadius: '50%',
                border: `${rhythm(1 / 3)} solid ${lightColor}`
            }}
                 src="http://via.placeholder.com/800x800" alt=""/>
        </div>

        <div css={{
            textAlign: 'center',
            ...secondaryFont,
        }}>
            <div css={{
                marginBottom: rhythm(1 / 2),
                fontSize: rhythm(1),
                letterSpacing: rhythm(2 / 10),
            }}>{props.name}</div>

            <div css={{
                color: lightSecondaryColor,
                marginBottom: rhythm(1 / 2),
                fontSize: rhythm(6 / 10),
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

const AboutSection = () => (
    <Section id="about">
        <SectionTitle centered>About</SectionTitle>
        <p css={{
            textAlign: 'center',
            fontSize: rhythm(4 / 5),
            lineHeight: rhythm(1)
        }}>TRVPxHILL is a hip hop group based out of the Pacific Northwest.</p>
        <div css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexBasis: '360px',
            maxWidth: 1000,
        }}>
            <AboutCard nameTo='#' name='EssToo' role='Rapper'>
                <SocialIcon icon='soundcloud' link='#'/>
                <SocialIcon icon='bandcamp' link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
            <AboutCard nameTo='#' name='Xavier' role='Instrumentals'>
                <SocialIcon icon='soundcloud' link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
            <AboutCard nameTo='#' name='Sandy' role='Vocals'>
                <SocialIcon icon='youtube-play' title="youtube" link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
        </div>
    </Section>
)

export default AboutSection;