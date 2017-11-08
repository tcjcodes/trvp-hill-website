import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { secondaryFont } from "../utils/fonts";
import SocialIcon from './social-icon'
import { lightColor } from '../utils/colors'
import { zoomOnHover } from '../utils/animation'

const AboutCard = (props) => (
    <div css={{ margin: `${rhythm(1 / 2)} ${rhythm(3 / 2)}` }}>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div css={{ }}>
                <img css={{
                    ...zoomOnHover,
                    objectFit: 'fill',
                    borderRadius: '50%',
                    border: `${rhythm(1 / 3)} solid ${lightColor}`
                }}
                     src="http://via.placeholder.com/800x800" alt=""/>
            </div>
        </div>

        <div css={{ textAlign: 'center' }}>
            <div css={{ marginBottom: rhythm(1 / 2), fontSize: rhythm(7 / 10) }}>
                <span css={{ ...secondaryFont, letterSpacing: rhythm(2 / 10) }} href={props.nameTo}>{props.name}</span>
            </div>
            <p css={{ fontSize: rhythm(2 / 3) }}>
                Purr for no reason rub face on everything, and sit on human or spill litter box, scratch at owner,
                destroy all furniture, especially couch.
            </p>
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
            flexBasis: '360px'
        }}>
            <AboutCard nameTo='#' name='EssToo'>
                <SocialIcon icon='soundcloud' link='#'/>
                <SocialIcon icon='bandcamp' link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
            <AboutCard nameTo='#' name='Xavier'>
                <SocialIcon icon='soundcloud' link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
            <AboutCard nameTo='#' name='Sandy'>
                <SocialIcon icon='youtube-play' title="youtube" link='#'/>
                <SocialIcon icon='facebook' link='#'/>
                <SocialIcon icon='instagram' link='#'/>
            </AboutCard>
        </div>
    </Section>
)

export default AboutSection;