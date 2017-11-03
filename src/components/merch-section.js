import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { primaryButton } from '../utils/buttons'

import jacket from './mockjacket.png';

// TODO(TC) handle button click
const MerchSection = () => (
    <Section id="merch">
        <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <SectionTitle>Merch</SectionTitle>

                <p css={{ fontSize: rhythm(9 / 10), marginBottom: rhythm(1/4) }}>
                    <strong css={{ letterSpacing: rhythm(1 / 9) }}>TH BOMBER JACKET</strong>, <span>$45.00</span>
                </p>
                <p css={{ fontSize: rhythm(4 / 5) }}>Rep your city and get cozy in a TH fit.</p>

                <button css={{ ...primaryButton, marginTop: rhythm(1 / 2) }}>Add to Cart</button>
            </div>
            <div css={{ marginTop: rhythm(1 / 2) }}>
                <div css={{ maxWidth: '500px' }}>
                    <img css={{border: '8px solid white'}} src={jacket} alt="TH Bomber Jacket"/>
                </div>
            </div>
        </div>
    </Section>
)

export default MerchSection;