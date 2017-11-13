import React from 'react'
import { rhythm } from '../utils/typography';
import { DefaultResponsive, Desktop } from '../utils/responsive'
import { Section, SectionTitle } from './section'
import { darkSecondaryColor, lightColor, lightSecondaryColor } from '../utils/colors'
import { primaryButton } from '../utils/buttons'
import { secondaryFont } from '../utils/fonts'

const labelCss = {
    ...secondaryFont,
    fontSize: rhythm(4 / 5),
}
const sharedInputCss = {
    letterSpacing: '1px',
    border: 0,
    borderBottom: `1px solid ${lightSecondaryColor}`,
    padding: `${rhythm(1 / 3)} 0`,
    color: lightColor,
    background: 'transparent',
    fontSize: rhythm(6 / 10),
    '&:focus': {
        outline: 'none',
        borderBottom: `2px solid ${lightColor}`,
    },
}
const TextInput = (props) => (
    <DefaultResponsive>{(isDesktop) =>
        <div css={{
            marginBottom: `${rhythm(1)}`,
            width: isDesktop ? '28%' : '95%',
            display: 'inline-block',
            marginRight: isDesktop && rhythm(1)
        }}>
            <label css={labelCss} htmlFor={props.name}>{props.label}</label>
            <br/>
            <input
                css={{
                    ...sharedInputCss,
                    width: '100%',
                }}
                name={props.name}
                type={props.type || 'text'}
                value={props.value}
                onChange={props.onChange}/>
        </div>
    }</DefaultResponsive>
)
const TextareaInput = (props) => (
    <div>
        <label css={labelCss} htmlFor={props.name}>{props.label}</label>
        <br/>
        <textarea
            css={{
                ...sharedInputCss,
                margin: `${rhythm(1 / 3)} 0 ${rhythm(1)} 0`,
                resize: 'none',
                height: rhythm(8),
                width: '95%',
            }}
            name={props.name}
            onChange={props.onChange}/>
    </div>
)

const encode = (data) =>
    (Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&'))

class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(e) {
        alert('form submitted')
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state })
        })
            .then(() => {
                alert('Success!');
            })
            .catch(error => alert(error));

        e.preventDefault();
    }

    render() {
        return (
            <Section
                styles={{
                    width: !this.props.isMobile && '100vw',
                    margin: rhythm(1)
                }} id='contact'>
                <SectionTitle>Contact</SectionTitle>
                <form name='contact'
                      method='post'
                      action='/thanks/'
                      data-netlify='true'
                      data-netlify-honeypot='bot-field'
                      onSubmit={this.handleSubmit}
                      css={{ maxWidth: !this.props.isMobile && '900px', }}>
                    <input hidden='true' name='bot-field' />
                    <TextInput name='name' label='Name' onChange={this.handleChange} />
                    <TextInput name='email' label='Email' type='email' onChange={this.handleChange} />
                    <TextInput name='subject' label='Subject' onChange={this.handleChange} />
                    <TextareaInput name='message' label='Message' onChange={this.handleChange} />
                    <button type='submit' css={{ ...primaryButton, marginTop: rhythm(1 / 2), }}>SUBMIT</button>
                </form>
            </Section>
        )
    }
}

const ResponsiveContact = (props) =>
    <Desktop>{(matches) => <ContactContainer isMobile={!matches} {...props} />}</Desktop>

export default ResponsiveContact;