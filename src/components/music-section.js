import React from 'react'
import { rhythm } from '../utils/typography';
// import '../lib/soundcloud-widget-20170920';
import { Section, SectionTitle } from "./section";
import { lightColor, lightSecondaryColor } from '../utils/colors'
import { Desktop } from '../utils/responsive'

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

// const albumArt = "http://via.placeholder.com/400x400";

const MusicSection = (props) => (
    <Section id="music">
        <SectionTitle centered>MUSIC</SectionTitle>
        <div css={{
            marginTop: rhythm(1),
            width: props.isMobile ? '90vw' : '750px',
            textAlign: 'center'
        }}>
            COMING SOON
            {/*<iframe css={{ border: 0 }} id="scwidget" width="100%" height="166" scrolling="no" data-frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341242026&amp;color=%23000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;show_playcount=false&amp;show_artwork=false"></iframe>*/}
        </div>

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