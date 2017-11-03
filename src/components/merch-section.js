import {rhythm} from '../utils/typography';
import { Section, SectionTitle } from "./section";

const MerchSection = () => (
  <Section id="merch">
    <SectionTitle>Merch</SectionTitle>
    <div css={{ marginTop: rhythm(1/2) }}>
      <div css={{maxWidth: '25%', margin: '0 auto'}}>
        <img src="http://via.placeholder.com/800x800" alt=""/>
        <div css={{ textAlign: 'center'}}>
          <strong>TH BOMBER</strong> | $45.00
        </div>
      </div>
    </div>

  </Section>
)

export default MerchSection;