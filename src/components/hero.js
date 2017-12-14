import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import { rhythm } from '../utils/typography'
import { Background, Parallax } from 'react-parallax'
import MediaQuery from 'react-responsive'
import coverPhoto2400 from './images/stockhero_2400x1600.png'
import coverPhoto1440 from './images/stockhero_1440x.png'
import coverPhoto1200 from './images/stockhero_1200x.png'
import coverPhoto1024 from './images/stockhero_1024x.png'
import coverPhoto900 from './images/stockhero_900x.png'
import coverPhotoMobile from './images/stockhero_768mobile.png'
import { navHeight } from './navigation'
import { Desktop } from '../utils/responsive'

const bgLinearGradient = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65))`;

const sharedTextCss = {
    fontWeight: 600,
    fontSize: rhythm(7 / 2),
    textTransform: 'none',
}
const imgCss = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}
const mobileTextCss = {
    textShadow: `0 ${rhythm(1 / 4)} ${rhythm(1 / 2)} rgba(0, 0, 0, 0.8)`,
}

const id = 'hero';
const HeroWaypoint = ({ children, onWaypointEnter, onWaypointLeave }) =>
    <Waypoint onEnter={(e) => onWaypointEnter({ e, id })}
              onLeave={(e) => onWaypointLeave({ e, id })}
              topOffset={navHeight}>
        <div>{children}</div>
    </Waypoint>

const Hero = (props) => (
    <Desktop>
        {(isDesktop) => {
            return (<section id="top" css={{
                textAlign: 'center',
            }}>
                {!isDesktop && <HeroWaypoint {...props}>
                    <div css={{
                        background: `${bgLinearGradient}, url(${coverPhotoMobile}) center center repeat fixed`,
                        height: '100vh',
                        top: 0,
                        left: 0,
                        /* Preserve aspect ratio */
                        minWidth: '100%',
                        minHeight: '100%',
                        '@media screen and (max-width: 768px)': {
                            backgroundPositionX: '50%',
                            backgroundPositionY: '0',
                        }
                    }}>
                        <div css={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '15%',
                            height: '85%',
                            flexWrap: 'wrap',
                        }}>
                            {'THRIVLPL'.split('').map((letter, index) => <div key={index} css={{
                                ...sharedTextCss,
                                ...mobileTextCss,
                                width: '50%',
                            }}>{letter}</div>)}
                        </div>
                    </div>
                </HeroWaypoint>}

                {isDesktop && <Parallax strength={350}>
                    <Background>
                        <div css={{ height: '100vh', width: '100vw' }}>
                            <MediaQuery minDeviceWidth={1441}>
                                <img css={imgCss} src={coverPhoto2400}/>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={1201} maxDeviceWidth={1440}>
                                <img css={imgCss} src={coverPhoto1440}/>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={1025} maxDeviceWidth={1200}>
                                <img css={imgCss} src={coverPhoto1200}/>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={901} maxDeviceWidth={1024}>
                                <img css={imgCss} src={coverPhoto1024}/>
                            </MediaQuery>
                            <MediaQuery maxDeviceWidth={900}>
                                <img css={imgCss} src={coverPhoto900}/>
                            </MediaQuery>
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
                                    letterSpacing: rhythm(2),
                                    fontSize: rhythm(7 / 2),
                                    textShadow: `0 ${rhythm(1 / 6)} ${rhythm(1 / 4)} rgba(0, 0, 0, 0.8)`,
                                    margin: `0 ${rhythm(2)}`,
                                }}>

                                    <MediaQuery maxWidth={1199}>
                                        TRVP<br/>HILL
                                    </MediaQuery>
                                    <MediaQuery minWidth={1200}>
                                        TRVPHILL
                                    </MediaQuery>
                                </h1>
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