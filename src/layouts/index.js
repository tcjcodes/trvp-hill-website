import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography';
import 'normalize.css';

const NavLink = (props) => <li css={{display: `inline-block`, margin: `0 1rem 0 0`, fontWeight: 700}}>
  <a href={'#' + props.to}>
    {props.children}
  </a>
</li>
const Header = () => (
  <div css={{margin: `0 auto`, padding: `1rem 1rem`, position: 'fixed', width: '100%', background: '#000'}}>
    <header css={{}}>
      <ul css={{listStyle: `none`, float: `left`, margin: 0}}>
        <NavLink to="top">
          <h3 css={{display: `inline`}}>GATSBY</h3>
        </NavLink>
      </ul>

      <ul css={{listStyle: `none`, float: `right`, margin: 0}}>
        <NavLink to="music">music</NavLink>
        <NavLink to="merch">merch</NavLink>
        <NavLink to="about">about</NavLink>
        {/*<NavLink to="contact">Contact</NavLink>*/}
      </ul>
    </header>
  </div>
)

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
