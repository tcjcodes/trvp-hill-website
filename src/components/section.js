import React from 'react'
import { rhythm } from '../utils/typography';
import { secondaryFont } from "../utils/fonts";

// todo transparent at top, black on scroll, fix opacity

export const Section = (props) => (
    <section
        id={props.id}
        css={{
            minHeight: '90vh',
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            letterSpacing: '1px'
        }}>{props.children}</section>
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
