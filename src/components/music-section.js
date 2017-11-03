import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";

const MusicSection = () => (
    <Section id="music">
        <div css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <SectionTitle centered>MUSIC</SectionTitle>
            <div css={{ textAlign: 'center' }}>
                <br/>
                <span css={{ fontSize: rhythm(7 / 10), letterSpacing: rhythm(1 / 4) }}><span className="fa fa-play"></span> GIRLS GOIN (HAILEY)</span>
                {/*<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/216367084%3Fsecret_token%3Ds-2L6rY&amp;color=%23000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>*/}
            </div>
        </div>
    </Section>
);

export default MusicSection;