import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { primaryButton } from '../utils/buttons'

// TODO(TC) handle button click
const MerchSection = () => (
    <Section id="merch">
        <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <SectionTitle>Merch</SectionTitle>

                <p css={{ fontSize: rhythm(9 / 10) }}>
                    <strong css={{ letterSpacing: rhythm(1 / 9) }}>TH BOMBER</strong>, <span>$45.00</span>
                </p>
                <p css={{ fontSize: rhythm(4 / 5) }}>Rep your city and get cozy in a TH fit.</p>

                <button css={{ ...primaryButton, marginTop: rhythm(1 / 2) }}>Add to Cart</button>
            </div>
            <div css={{ marginTop: rhythm(1 / 2) }}>
                <div css={{ maxWidth: '400px', margin: '0 auto' }}>
                    <img src="http://via.placeholder.com/800x800" alt=""/>
                </div>
            </div>
        </div>
    </Section>
)

export default MerchSection;