import React from 'react'
import { rhythm } from '../utils/typography';
import { Parallax } from 'react-parallax';
// import asfalt from './asfalt.png';
import coverPhoto from './DeathtoStock_IntotheLight-06.jpg';

// TODO parallax

const Hero = () => (
    <section id="top" css={{
        height: '100vh',
        width: '100%',
        textAlign: 'center',
    }}>
        <div css={{
            background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${coverPhoto}) repeat`,
            height: '100%',
            backgroundSize: 'cover',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <h1 css={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', fontSize: rhythm(2.8), fontWeight: 600, color: 'white', letterSpacing: rhythm(3 / 2) }}>
                TRVPHILL
            </h1>
        </div>
    </section>
)

export default Hero
