import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import { rhythm } from '../utils/typography'
import { Background, Parallax } from 'react-parallax'
import coverPhoto from './DeathtoStock_IntotheLight-06.jpg'

const id = 'hero';

const Hero = (props) => (
    <section id="top" css={{
        textAlign: 'center',
    }}>
        <Parallax bgImage={coverPhoto}
                  bgStyle={{ objectFit: 'cover', marginTop: rhythm(-3 / 2) }}
                  strength={300}>
            <Waypoint onEnter={(e) => props.onWaypointEnter({ e, id })}
                      onLeave={(e) => props.onWaypointLeave({ e, id })}>
                <div css={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))',
                    height: '100vh',
                }}>
                    <div css={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                        <h1 css={{
                            textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)',
                            fontSize: rhythm(2.8),
                            fontWeight: 600,
                            letterSpacing: rhythm(3 / 2),
                            textTransform: 'none'
                        }}>
                            TRVPxHILL
                        </h1>
                    </div>
                </div>
            </Waypoint>
        </Parallax>
    </section>
)

Hero.propTypes = {
    onWaypointEnter: PropTypes.func,
    onWaypointLeave: PropTypes.func,
}

export default Hero
