import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import { rhythm } from '../utils/typography'
import { Background, Parallax } from 'react-parallax'
import coverPhoto from './images/stockhero_2400x1600.png'
import { navHeight } from './navigation'
import { Desktop, Tablet } from '../utils/responsive'

const bgLinearGradient = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65))`;

const sharedTextCss = {
    textShadow: `0 ${rhythm(1 / 6)} ${rhythm(1 / 4)} rgba(0, 0, 0, 0.8)`,
    fontSize: rhythm(3),
    fontWeight: 600,
    letterSpacing: rhythm(3 / 2),
    textTransform: 'none',
}

const id = 'hero';
const HeroWaypoint = ({ children, onWaypointEnter, onWaypointLeave }) =>
    <Waypoint onEnter={(e) => onWaypointEnter({ e, id })}
              onLeave={(e) => onWaypointLeave({ e, id })}
              topOffset={navHeight}>{children}</Waypoint>

const Hero = (props) => (
    <Desktop>
        {(isDesktop) => {
            return (<section id="top" css={{
                textAlign: 'center',
            }}>
                {!isDesktop && <HeroWaypoint {...props}>
                    <Tablet>{(isTablet) => <div css={{
                        background: `${bgLinearGradient}, url(${coverPhoto}) center no-repeat fixed`,
                        height: '100vh',
                        backgroundSize: 'cover',
                        display: 'flex',
                        flexDirection: isTablet ? 'row' : 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: rhythm(1),
                        ...sharedTextCss,
                    }}>
                        {isTablet && <span css={{
                            margin: `0 ${rhythm(1 / 2)}`,
                        }}>
                            TRVP<br/>HILL
                        </span>}
                        {!isTablet && 'TRVPHILL'.split('').map((letter) => <div>{letter}</div>)}
                    </div>}</Tablet>
                </HeroWaypoint>}

                {isDesktop && <Parallax strength={350}>
                    <Background>
                        <div css={{ width: '110vw' }}>
                            <img css={{ objectFit: 'cover' }} src={coverPhoto}/>
                        </div>
                    </Background>
                    <HeroWaypoint {...props}>
                        <div css={{
                            background: bgLinearGradient,
                            height: '100vh',
                        }}>
                            <div css={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
                                <h1 css={{
                                    ...sharedTextCss,
                                    margin: `0 ${rhythm(2)}`,
                                }}>TRVPHILL</h1>
                            </div>
                        </div>
                    </HeroWaypoint>
                </Parallax>}
            </section>)
        }}
    </Desktop>
)

Hero.propTypes = {
    data: PropTypes.object,
    onWaypointEnter: PropTypes.func,
    onWaypointLeave: PropTypes.func,
}

export default Hero