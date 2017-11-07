import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { lightColor } from '../utils/colors'

const handleClick = (e) => {
    e.preventDefault();
}

const MusicSection = () => (
    <Section id="music">
        <SectionTitle centered>MUSIC</SectionTitle>
        <div css={{
            width: '750px',
            margin: `${rhythm(1/4)} auto`,
            border: `1px solid #ddd`,
            borderRadius: '3px'
        }}>
            <img css={{ float: 'left', margin: 0, width: rhythm(3), height: rhythm(3) }}
                 src="http://via.placeholder.com/300x300" alt=""/>
            <div css={{ display: 'inline' }}>
                <div css={{
                    padding: rhythm(2/3),
                    height: rhythm(3), display: 'flex', alignItems: 'center',
                    letterSpacing: rhythm(1 / 4)
                }}>
                    <span css={{ fontSize: rhythm(4 / 5), float: 'left', width: '100%' }}>GIRLS GOIN (HAILEY)</span>
                    <button onClick={handleClick}
                            title='Play song'
                            css={{
                                cursor: 'pointer',
                                marginTop: rhythm(1/8),
                                color: lightColor, background: 'transparent',
                                transitionDuration: '0.2s',
                                transitionProperty: 'transform',
                                transform: 'perspective(1px) translateZ(0)',
                                '&:hover': {
                                    transform: 'scale(1.2)'
                                }, border: 0, fontSize: rhythm(3 / 2), float: 'right', textAlign: 'right'
                            }}>
                        <span className="fa fa-play-circle"></span>
                    </button>
                </div>
            </div>
        </div>

        {/*<div css={{ textAlign: 'center' }}>
            <br/>
            <a href='' onClick={handleClick}
               css={{ fontSize: rhythm(7 / 10), letterSpacing: rhythm(1 / 4) }}>
                <span className="fa fa-play"></span>{' '}
                GIRLS GOIN (HAILEY)
            </a>
            <div css={{ display: 'none' }}>
                <iframe width="100%" height="450" scrolling="no" frameborder="no"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/216367084%3Fsecret_token%3Ds-2L6rY&amp;color=%23000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
            </div>
        </div>*/}
    </Section>
);

export default MusicSection;