import React from 'react'
import {rhythm} from '../utils/typography';
import { secondaryFont } from "../utils/fonts";
import Hero from '../components/hero';
import MusicSection from "../components/music-section";
import MerchSection from '../components/merch-section';
import AboutSection from '../components/about-section';
import Footer from '../components/footer'

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
