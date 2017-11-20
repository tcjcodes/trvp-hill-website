import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import Scrollchor from 'react-scrollchor'
import { secondaryFont } from "../utils/fonts";
import { darkColor } from '../utils/colors'

export const navHeight = '55px';

const NavLink = (props) =>
    <li css={{ display: `inline-block`, margin: `0 1rem 0 0`, fontWeight: 700 }}>
        <Scrollchor to={props.to}>{props.children}</Scrollchor>
    </li>

const Navigation = (props) => (
    <div css={{
        margin: `0 auto`,
        height: navHeight,
        padding: rhythm(1 / 2),
        position: 'fixed',
        width: '100%',
        background: props.activeWaypoints.indexOf('hero') >= 0 ? 'transparent' : darkColor,
        zIndex: 100,
    }}>
        <header>
            <ul css={{
                opacity: props.activeWaypoints.indexOf('hero') >= 0 ? 0 : '1.0',
                transition: 'opacity 0.3s ease',
                listStyle: `none`,
                float: `left`,
                margin: 0,
            }}>
                <NavLink to="top">
                    <span css={{
                        fontWeight: 600,
                        letterSpacing: rhythm(1 / 4),
                        display: `inline`,
                        textTransform: 'none',
                    }}>TRVPHILL</span>
                </NavLink>
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

Navigation.propTypes = {
    activeWaypoints: PropTypes.array,
}

export default Navigation;
