import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import { rhythm } from '../utils/typography'
import { Background, Parallax } from 'react-parallax'
import coverPhoto from './images/stockhero_2400x1600.png'
import { navHeight } from './navigation'
import { Desktop } from '../utils/responsive'

const bgLinearGradient = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))`;

const sharedTextCss = {
    textShadow: `0 ${rhythm(1 / 6)} ${rhythm(1 / 4)} rgba(0, 0, 0, 0.8)`,
    fontSize: rhythm(2.8),
    fontWeight: 600,
    letterSpacing: rhythm(3 / 2),
    textTransform: 'none',
    margin: `0 ${rhythm(2)}`,
    wordWrap: 'normal',
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
                    <div css={{
                        background: `${bgLinearGradient}, url(${coverPhoto}) center no-repeat fixed`,
                        height: '100vh',
                        backgroundSize: 'cover',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <h1 css={sharedTextCss}>TRVP<br/>HILL</h1>
                    </div>
                </HeroWaypoint>}

                {isDesktop && <Parallax strength={350}>
                    <Background>
                        <div css={{ width: '120vw', overflow: 'hidden' }}>
                            <img src={coverPhoto}/>
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
                                <h1 css={sharedTextCss}>TRVPHILL</h1>
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