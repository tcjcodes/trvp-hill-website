import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import { rhythm } from '../utils/typography'
import { secondaryFont } from "../utils/fonts"

const handleWaypointEnter = (id) => console.log(`${id} entered`)
const handleWaypointLeave = (id) => console.log(`${id} left`)

export const Section = (props) => (
    <section
        id={props.id}
        css={{
            minHeight: '90vh',
            paddingTop: rhythm(1.5),
            paddingBottom: rhythm(1.5),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            letterSpacing: '1px',
            ...props.styles
        }}>
        <Waypoint>
            <div>
                {props.children}
            </div>
        </Waypoint>
    </section>
)

export const SectionTitle = (props) => (
    <div css={{ textAlign: props.centered ? 'center' : 'left' }}>
        <h1 css={{
            ...secondaryFont,
            letterSpacing: rhythm(1 / 10),
            marginBottom: rhythm(1 / 2)
        }}>
            {props.children}<br/>
            &mdash;
        </h1>
    </div>
)
