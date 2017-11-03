import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from "./section";
import { secondaryFont } from "../utils/fonts";

const SocialIcon = (props) => (
  <div css={{ display: 'inline-block', padding: `0 ${rhythm(1 / 2)}` }}>
    <a href={props.link} title={props.title || props.icon}><span css={{ fontSize: rhythm(1 / 3) }}
                                                                 className={`fa fa-${props.icon}`}/></a>
  </div>
)

const AboutCard = (props) => (
  <div css={{ maxWidth: '500px' }}>
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img css={{
        maxWidth: rhythm(8),
        maxHeight: rhythm(8),
        objectFit: 'fill',
        borderRadius: '50%',
        border: `${rhythm(1 / 3)} solid white`
      }}
           src="http://via.placeholder.com/800x800" alt=""/>
    </div>

    <div css={{ textAlign: 'center', padding: `0 ${rhythm(1)}` }}>
      <div css={{ marginBottom: rhythm(1 / 2), fontSize: rhythm(7 / 10) }}>
        <span css={{ ...secondaryFont, letterSpacing: rhythm(2 / 10) }} href={props.nameTo}>{props.name}</span>
      </div>
      <p>
        Purr for no reason rub face on everything, and sit on human or spill litter box, scratch at owner, destroy
        all furniture, especially couch. I just saw other cats inside the house and nobody ask me before using my
        litter box chirp at birds.
      </p>
      <div css={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {props.children}
      </div>
    </div>
  </div>
)

const AboutSection = () => (
  <Section id="about">
    <SectionTitle centered>About</SectionTitle>

    <div css={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <AboutCard nameTo='#' name='EssToo'>
        <SocialIcon icon='soundcloud' link='#'/>
        <SocialIcon icon='bandcamp' link='#'/>
        <SocialIcon icon='facebook' link='#'/>
        <SocialIcon icon='instagram' link='#'/>
      </AboutCard>
      <AboutCard nameTo='#' name='Xavier'>
        <SocialIcon icon='soundcloud' link='#'/>
        <SocialIcon icon='facebook' link='#'/>
        <SocialIcon icon='instagram' link='#'/>
      </AboutCard>
      <AboutCard nameTo='#' name='Sandy'>
        <SocialIcon icon='youtube-play' title="youtube" link='#'/>
        <SocialIcon icon='facebook' link='#'/>
        <SocialIcon icon='instagram' link='#'/>
      </AboutCard>
    </div>
  </Section>
)

export default AboutSection;