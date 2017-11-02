import React from 'react'
import Link from 'gatsby-link'
import {rhythm} from '../utils/typography';

const Section = (props) => (
  <section id={props.id} css={{
    height: '90vh',
    // marginTop: rhythm(-1),
    marginBottom: rhythm(1.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    letterSpacing: '1px'
  }}>{props.children}</section>
)

const Cover = () => (
  <section id="top" css={{
    width: '100%',
    height: '90vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }}>
    <div css={{}}>
      <h1 css={{fontSize: rhythm(3), fontWeight: 600, color: 'white', letterSpacing: rhythm(1 / 2)}}>
        GATSBYPARADISE
      </h1>
    </div>
  </section>
)

const MusicSection = () => (
  <Section id="music">
    <h1>MUSIC</h1>
    <div>
      lOREM IPSUM
    </div>
  </Section>
)

const AboutSection = () => (
  <Section id="about">
    <h1>About</h1>
    <div>
      todo

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <small><Link to="/page-2/">Go to page 2</Link></small>

    </div>
  </Section>
)

const MerchSection = () => (
  <Section id="merch">
    <h1>Merch</h1>
    <div>
      todo

    </div>
  </Section>
)

const IndexPage = () => (
  <div>
    <Cover/>
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
      <MusicSection/>
      <AboutSection/>
      <MerchSection/>
    </div>
  </div>
)

export default IndexPage
