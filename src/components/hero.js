import React from 'react'
import { rhythm } from '../utils/typography';
import { Background, Parallax } from 'react-parallax';
import coverPhoto from './DeathtoStock_IntotheLight-06.jpg';

const insideStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
};

const Hero = () => (
    <section id="top" css={{
        textAlign: 'center',
    }}>
        <Parallax bgImage={coverPhoto}
                  bgStyle={{ objectFit: 'cover', marginTop: rhythm(-3/2) }}
                  blur={{ min: -10, max: 5 }}
                  strength={300}>
            <div css={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))',
                height: '100vh',
            }}>
                <div css={insideStyles}>
                    <h1 css={{
                        textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)',
                        fontSize: rhythm(2.8),
                        fontWeight: 600,
                        letterSpacing: rhythm(3 / 2)
                    }}>
                        TRVPHILL
                    </h1>
                </div>
            </div>
        </Parallax>
    </section>
)

export default Hero
