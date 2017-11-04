import React from 'react'
import { rhythm } from '../utils/typography';
import { secondaryFont } from "../utils/fonts";
import { darkColor } from '../utils/colors'

const NavLink = (props) => <li css={{ display: `inline-block`, margin: `0 1rem 0 0`, fontWeight: 700 }}>
    <a css={{ ...props.styles }} href={'#' + props.to}>
        {props.children}
    </a>
</li>

const Navigation = () => (
    <div css={{
        margin: `0 auto`, padding: `${rhythm(1/2)} 1rem`, position: 'fixed', width: '100%',
        background: darkColor, zIndex: 100
    }}>
        <header css={{}}>
            <ul css={{ listStyle: `none`, float: `left`, margin: 0 }}>
                <NavLink styles={{ fontWeight: 600, letterSpacing: rhythm(1 / 4) }} to="top">
                    <span css={{ display: `inline`, fontWeight: 'bold', fontSize: rhythm(3 / 4) }}>trvphill</span>
                </NavLink>
            </ul>

            <ul css={{ listStyle: `none`, float: `right`, margin: 0, ...secondaryFont, letterSpacing: rhythm(1 / 10) }}>
                <NavLink to="music">music</NavLink>
                <NavLink to="merch">merch</NavLink>
                <NavLink to="about">about</NavLink>
                {/*<NavLink to="contact">Contact</NavLink>*/}
            </ul>
        </header>
    </div>
)

export default Navigation;