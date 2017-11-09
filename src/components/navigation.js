import React from 'react'
import { rhythm } from '../utils/typography';
import Scrollchor from 'react-scrollchor'

import { secondaryFont } from "../utils/fonts";
import { darkColor } from '../utils/colors'

export const navHeight = '50px';

const NavLink = (props) => <li css={{ display: `inline-block`, margin: `0 1rem 0 0`, fontWeight: 700 }}>
    <Scrollchor css={{ ...props.styles }} to={props.to}>
        {props.children}
    </Scrollchor>
</li>

const Navigation = (props) => (
    <div css={{
        margin: `0 auto`,
        height: navHeight,
        padding: `${rhythm(1 / 2)} ${rhythm(1)}`,
        position: 'fixed',
        width: '100%',
        background: props.activeWaypoints.indexOf('hero') >= 0 ? 'transparent' : darkColor,
        zIndex: 100
    }}>
        <header>
            <ul css={{
                listStyle: `none`,
                float: `left`,
                margin: 0,
            }}>
                {props.activeWaypoints.indexOf('hero') < 0 &&
                <NavLink styles={{ fontWeight: 600, letterSpacing: rhythm(1 / 4) }} to="top">
                    <span css={{
                        display: `inline`,
                        fontWeight: 'bold',
                        fontSize: rhythm(3 / 4),
                        textTransform: 'none',
                    }}>TRVPHILL</span>
                </NavLink>}
            </ul>
            <ul css={{ listStyle: `none`, float: `right`, margin: 0, ...secondaryFont, letterSpacing: rhythm(1 / 10) }}>
                <NavLink to="music">music</NavLink>
                <NavLink to="merch">merch</NavLink>
                <NavLink to="about">about</NavLink>
                <NavLink to="contact">contact</NavLink>
            </ul>
        </header>
    </div>
)

export default Navigation;