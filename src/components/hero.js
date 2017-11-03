import { rhythm } from '../utils/typography';
// import asfalt from './asfalt.png';
import coverPhoto from './DeathtoStock_IntotheLight-06.jpg';

// TODO parallax

const Hero = () => (
  <section id="top" css={{
    background: `linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ), url(${coverPhoto}) repeat`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }}>
    <h1 css={{ fontSize: rhythm(2.8), fontWeight: 600, color: 'white', letterSpacing: rhythm(3 / 2) }}>
      TRVPHILL
    </h1>
  </section>
)

export default Hero
