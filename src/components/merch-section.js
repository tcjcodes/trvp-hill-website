import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { primaryButton } from '../utils/buttons'

import jacket from './images/mockjacket.png';
import { lightColor } from '../utils/colors'
import { zoomOnHover } from '../utils/animation'

// TODO(TC) handle button click
const MerchSection = () => (
    <Section id="merch">
        <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <SectionTitle>Merch</SectionTitle>

                <p css={{ fontSize: rhythm(9 / 10), marginBottom: rhythm(1 / 4) }}>
                    <strong css={{ letterSpacing: rhythm(1 / 9) }}>TH BOMBER JACKET</strong>
                </p>
                <p css={{ fontSize: rhythm(4 / 5) }}>Rep your city and get cozy in a TH fit.</p>

                <button disabled='disabled' css={{
                    ...primaryButton,
                    cursor: 'not-allowed',
                    marginTop: rhythm(1 / 2),
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                }}>COMING SOON
                </button>
                {/*<button css={{
                    ...primaryButton,
                    ...zoomOnHover,
                    cursor: 'pointer',
                    marginTop: rhythm(1 / 2)
                }}>BUY NOW</button>*/}
            </div>
            <div css={{ margin: `${rhythm(1 / 2)} 0 0 ${rhythm(3)}` }}>
                <div css={{ maxWidth: '500px' }}>
                    <img css={{
                        border: `${rhythm(1 / 4)} solid ${lightColor}`,
                        ...zoomOnHover
                    }} src={jacket} alt="TH Bomber Jacket"/>
                </div>
            </div>
        </div>
    </Section>
)

export default MerchSection;