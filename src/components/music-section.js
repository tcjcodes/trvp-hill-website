import React from 'react'
import { rhythm } from '../utils/typography';
// import '../lib/soundcloud-widget-20170920';
import { Section, SectionTitle } from "./section";
import { lightColor, lightSecondaryColor } from '../utils/colors'
import { Desktop } from '../utils/responsive'
import { SocialImageIcon } from './social-icon'
import tidalIcon from './images/icon-tidal.png'
import amazonIcon from './images/icon-amazonmusic.png'
import googlePlayIcon from './images/icon-googleplay.png'
import itunesIcon from './images/icon-itunes.png'

const sharedButtonCss = {
    cursor: 'pointer',
    color: lightSecondaryColor,
    background: 'transparent',
    border: 0,
    outline: 0,
    transitionDuration: '0.2s',
    transitionProperty: 'transform',
    transform: 'perspective(1px) translateZ(0)',
    '&:hover': {
        transform: 'scale(1.2)',
        color: lightColor
    },
}
const handleClick = (e) => {
    e.preventDefault();
    alert('Coming soon');
}

export const MusicIcon = (props) => (
    <div css={{
        fontSize: rhythm(1.75),
        flex: '1 0 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <a className={`fa fa-${props.icon} fa-lg`} css={{
            margin: rhythm(1),
        }} href={props.link} title={props.title || props.icon} target='_blank'>
        </a>
    </div>
)

export const MusicImageIcon = (props) => (
    <div css={{
        flex: '1 0 0px',
    }}>
        <a css={{
            display: 'block',
            minWidth: '100px',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: rhythm(1),
            margin: rhythm(1),
        }} href={props.link} title={props.title} target='_blank'>
            <img css={{
                height: rhythm(2),
                width: 'auto',
                margin: 0,
            }} src={props.src} alt={props.alt || props.title}/>
        </a>
    </div>
)

const MusicSection = (props) => (
    <Section id="music">
        <SectionTitle centered>MUSIC</SectionTitle>
        <div css={{
            marginTop: rhythm(2),
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap',
            maxWidth: props.isMobile ? '500px' : '100%',
        }}>
            <MusicImageIcon isMobile={props.isMobile} src={amazonIcon} title='Amazon Music'
                            link='https://smile.amazon.com/dp/B0788DKN22/ref=cm_sw_r_cp_api_zHUmAb58C3KWT'/>

            <MusicIcon isMobile={props.isMobile} icon="apple" title='Apple Music'
                       link='https://itunes.apple.com/us/album/girls-goin-hailey-single/1325462470'/>

            <MusicImageIcon isMobile={props.isMobile} src={itunesIcon} title='iTunes'
                            link='https://itunes.apple.com/us/album/girls-goin-hailey-single/1325462470?uo=4&app=itunes'/>

            <MusicImageIcon isMobile={props.isMobile} src={googlePlayIcon} title='Google Play'
                            link='https://play.google.com/store/music/album/Trap_Hill_Girls_Goin_Hailey?id=Bogvpqyueqricy7grtrgrbcqjd4'/>

            <MusicIcon isMobile={props.isMobile} icon="spotify" title='Spotify'
                       link='https://open.spotify.com/track/2sjATR9BpmST5jkc2oXnNT?si=jQ226nLnSy-BlsZ8YvrfnQ'/>

            <MusicImageIcon isMobile={props.isMobile} src={tidalIcon} title='Tidal'
                            link='https://tidal.com/track/82469467'/>

            {/*<iframe css={{ border: 0 }} id="scwidget" width="100%" height="166" scrolling="no" data-frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341242026&amp;color=%23000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;show_playcount=false&amp;show_artwork=false"></iframe>*/}
        </div>

        {/* <div css={{
            marginTop: rhythm(2),
            width: props.isMobile ? '90vw' : '750px',
            textAlign: 'center',
            fontSize: rhythm(1),
        }}>
            <iframe css={{ border: 0 }} id="scwidget" width="100%" height="166" scrolling="no" data-frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341242026&amp;color=%23000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;show_playcount=false&amp;show_artwork=false"></iframe>
        </div>
*/}
        {/*{props.isMobile && <div css={{
            textAlign: 'center',
            marginTop: rhythm(1),
            padding: `0 ${rhythm(1)}`,
        }}>
            <div>
                <img src={albumArt} alt="Album Art"
                     css={{
                         border: `${rhythm(1 / 4)} solid ${lightColor}`,
                     }}/>
            </div>
            <button onClick={handleClick}
                    title='Play song'
                    css={{
                        ...sharedButtonCss,
                        ...secondaryFont,
                        letterSpacing: '2px',
                        fontSize: rhythm(1),
                    }}>
                <FontAwesome name="play-circle"/>{' '}GIRLS GOIN (HAILEY)
            </button>
        </div>}*/}
        {/*{!props.isMobile && <div css={{
            width: '750px',
            margin: `${rhythm(1 / 4)} auto`,
            border: `1px solid #ddd`,
            borderRadius: '3px'
        }}>
            <img css={{ float: 'left', margin: 0, width: rhythm(3), height: rhythm(3) }}
                 src={albumArt} alt="Album Art"/>
            <div css={{ display: 'inline' }}>
                <div css={{
                    padding: rhythm(2 / 3),
                    height: rhythm(3), display: 'flex', alignItems: 'center',
                    letterSpacing: rhythm(1 / 4)
                }}>
                    <span css={{ fontSize: rhythm(4 / 5), float: 'left', width: '100%' }}>GIRLS GOIN (HAILEY)</span>
                    <button onClick={handleClick}
                            title='Play song'
                            css={{
                                ...sharedButtonCss,
                                marginTop: rhythm(1 / 8),
                                fontSize: rhythm(3 / 2),
                                float: 'right',
                                textAlign: 'right',
                            }}>
                        <FontAwesome name="play-circle"/>
                    </button>
                </div>
            </div>
        </div>}*/}
    </Section>
);

// const albumArt = "http://via.placeholder.com/400x400";

const ResponsiveMusic = (props) =>
    <Desktop>{(matches) => <MusicSection isMobile={!matches} {...props} />}</Desktop>

class MusicPlayer extends React.Component {
    scPlayer;

    constructor(props) {
        super(props);
    }

    handlePlay(track) {
    }

    componentDidMount() {
        // this.scPlayer = SC.Widget('scwidget');//new SoundCloudAudio('YOUR_CLIENT_ID');
    }

    render() {
        return <Desktop>{(matches) => <MusicSection isMobile={!matches} {...this.props} />}</Desktop>;
    }
}

export default MusicPlayer;