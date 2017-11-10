import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { lightColor, lightSecondaryColor } from '../utils/colors'
import { Desktop } from '../utils/responsive'
import { secondaryFont } from '../utils/fonts'

const handleClick = (e) => {
    e.preventDefault();
}

const albumArt = "http://via.placeholder.com/400x400";
const MusicSection = (props) => (
    <Section id="music">
        <SectionTitle centered>MUSIC</SectionTitle>
        {props.isMobile && <div css={{
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
                        ...secondaryFont,
                        letterSpacing: '2px',
                        fontSize: rhythm(1),
                        cursor: 'pointer',
                        color: lightSecondaryColor,
                        background: 'transparent',
                        transitionDuration: '0.2s',
                        transitionProperty: 'transform',
                        transform: 'perspective(1px) translateZ(0)',
                        '&:hover': {
                            transform: 'scale(1.2)',
                            color: lightColor
                        },
                        border: 0,
                    }}>
                <span className="fa fa-play-circle"/>{' '}GIRLS GOIN (HAILEY)
            </button>
        </div>}
        {!props.isMobile && <div css={{
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
                                cursor: 'pointer',
                                marginTop: rhythm(1 / 8),
                                color: lightColor, background: 'transparent',
                                transitionDuration: '0.2s',
                                transitionProperty: 'transform',
                                transform: 'perspective(1px) translateZ(0)',
                                '&:hover': {
                                    transform: 'scale(1.2)'
                                }, border: 0, fontSize: rhythm(3 / 2), float: 'right', textAlign: 'right'
                            }}>
                        <span className="fa fa-play-circle"/>
                    </button>
                </div>
            </div>
        </div>}
    </Section>
);

const ResponsiveMusic = (props) =>
    <Desktop>{(matches) => <MusicSection isMobile={!matches} {...props} />}</Desktop>

export default ResponsiveMusic;