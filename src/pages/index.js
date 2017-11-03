import React from 'react'
import FontAwesome from 'react-fontawesome'
import {rhythm} from '../utils/typography';
import { secondaryFont } from "../utils/fonts";
// import feather from '../utils/feather';

const Section = (props) => (
  <section
    id={props.id}
    css={{
      minHeight: '600px',
      marginTop: rhythm(1.5),
      marginBottom: rhythm(1.5),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      letterSpacing: '1px'
    }}>{props.children}</section>
)
const SectionTitle = (props) => (
  <div css={{marginBottom: rhythm(1 / 2), textAlign: props.centered ? 'center' : 'left'}}>
    <h1 css={{
      ...secondaryFont,
      letterSpacing: rhythm(1 / 10),
    }}>
      {props.children}<br/>
      &mdash;
    </h1>
  </div>
)

const Hero = () => (
  <section id="top" css={{
    width: '100%',
    height: '90vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }}>
    <h1 css={{fontSize: rhythm(2.8), fontWeight: 600, color: 'white', letterSpacing: rhythm(3 / 2)}}>
      TRVPHILL
    </h1>
  </section>
)

const MusicSection = () => (
  <Section id="music">
    <SectionTitle>MUSIC</SectionTitle>
    <div>
      lOREM IPSUM
    </div>
  </Section>
)

const SocialIcon = (props) => (
  <div css={{display: 'inline-block', padding: `0 ${rhythm(1 / 2)}`}}>
    <a href={props.link} title={props.title || props.icon}><span css={{fontSize: rhythm(1/3) }} className={`fa fa-${props.icon}`} /></a>
  </div>
)


const AboutCard = (props) => (
  <div css={{maxWidth: '500px'}}>
    <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img css={{maxWidth: rhythm(8), maxHeight: rhythm(8), objectFit: 'fill', borderRadius: '50%', border: `${rhythm(1 / 3)} solid white`}}
           src="http://via.placeholder.com/800x800" alt=""/>
    </div>

    <div css={{textAlign: 'center', padding: `0 ${rhythm(1)}`}}>
      <div css={{marginBottom: rhythm(1 / 2), fontSize: rhythm(7/10)}}>
        <span css={{...secondaryFont, letterSpacing: rhythm(2/10)}} href={props.nameTo}>{props.name}</span>
      </div>
      <p>
        Purr for no reason rub face on everything, and sit on human or spill litter box, scratch at owner, destroy
        all furniture, especially couch. I just saw other cats inside the house and nobody ask me before using my
        litter box chirp at birds.
      </p>
      <div css={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {props.children}
      </div>
    </div>
  </div>
)

const AboutSection = () => (
  <Section id="about">
    <SectionTitle centered>About</SectionTitle>

    <div css={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
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

const MerchSection = () => (
  <Section id="merch">
    <SectionTitle>Merch</SectionTitle>
    <div>
      todo

    </div>
  </Section>
)

const Footer = () => (
  <div css={{textAlign: 'center', padding: rhythm(1 / 4), marginTop: rhythm(5)}}>
    <small css={{opacity: 0.5, textTransform: 'uppercase', letterSpacing: rhythm(1 / 9)}}>TRVPHILL. Copyright 2017.
    </small>
  </div>
)

const IndexPage = () => (
  <div>
    <Hero/>
    <div
      css={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: `0px ${rhythm(1.08)} ${rhythm(1.45)}`,
        paddingTop: 0,
      }}>
      <MusicSection/>
      <MerchSection/>
      <AboutSection/>
      <Footer/>
    </div>
  </div>
)

export default IndexPage
