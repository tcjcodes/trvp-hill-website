import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { primaryButton } from '../utils/buttons'

import jacket from './images/mockjacket.png';
import { lightColor } from '../utils/colors'
import { zoomOnHover } from '../utils/animation'
import { Desktop } from '../utils/responsive'

const sharedImgCss = {
    border: `${rhythm(1 / 4)} solid ${lightColor}`,
}
const sharedWrapperCss = {
    margin: `0 ${rhythm(1)}`,
}
const sharedButtonCss = {
    ...primaryButton,
    cursor: 'not-allowed',
    marginTop: rhythm(1 / 2),
    '&:hover': {
        cursor: 'not-allowed',
    },
}
const sharedItemTitleCss = {
    fontSize: rhythm(9 / 10),
    marginBottom: rhythm(1 / 4),
    letterSpacing: rhythm(1 / 9),
    fontWeight: 'bold'
}
const sharedDescriptionCss = {
    fontSize: rhythm(4 / 5)
}

const MerchSection = (props) => (
    <Section styles={sharedWrapperCss} id="merch">
        {!props.isDesktop && <div>
            <SectionTitle>Merch</SectionTitle>
            <img css={sharedImgCss} src={jacket} alt="TH Bomber Jacket"/>
            <div>
                <p css={sharedItemTitleCss}>TH BOMBER JACKET</p>
                <p css={sharedDescriptionCss}>Rep your city and get cozy in a TH fit.</p>
                <button disabled='disabled' css={sharedButtonCss}>COMING SOON</button>
            </div>
        </div>}

        {props.isDesktop && <div css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <div>
                <SectionTitle>Merch</SectionTitle>
                <p css={sharedItemTitleCss}>TH BOMBER JACKET</p>
                <p css={sharedDescriptionCss}>Rep your city and get cozy in a TH fit.</p>
                <button disabled='disabled' css={sharedButtonCss}>COMING SOON</button>
            </div>
            <div css={{
                margin: `${rhythm(1 / 2)} 0 0 ${rhythm(3)}`
            }}>
                <img css={{
                    ...zoomOnHover,
                    ...sharedImgCss,
                    maxWidth: '500px',
                }} src={jacket} alt="TH Bomber Jacket"/>
            </div>
        </div>}
    </Section>
)

const ResponsiveMerch = (props) =>
    <Desktop>{(matches) => <MerchSection isDesktop={matches} {...props} />}</Desktop>

export default ResponsiveMerch;