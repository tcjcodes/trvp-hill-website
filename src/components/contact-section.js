import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from './section'
import { darkSecondaryColor, lightColor, lightSecondaryColor } from '../utils/colors'
import { secondaryFont } from '../utils/fonts'
import { primaryButton } from '../utils/buttons'

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
const textInputCss = {
    ...sharedInputCss,
    width: '100%',
};
const textareaInputCss = {
    ...sharedInputCss,
    margin: `${rhythm(1 / 3)} 0 ${rhythm(1)} 0`,
    resize: 'none',
    height: rhythm(8),
    width: '95%',
};

const TextInput = (props) => (
    <div css={{
        marginBottom: `${rhythm(1)}`,
        width: '28%',
        display: 'inline-block',
        marginRight: rhythm(1)
    }}>
        <label css={labelCss} htmlFor={props.name}>{props.label}</label>
        <br/>
        <input
            css={textInputCss}
            name={props.name}
            type={props.type || 'text'}
            value={props.value}
            onChange={props.onChange}/>
    </div>
)

class TextInputContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (<TextInput
            label={this.props.label}
            name={this.props.name}
            onChange={this.handleChange}
            value={this.state.value}/>)
    }
}

const TextareaInput = (props) => (
    <div css={{}}>
        <label css={labelCss} htmlFor={props.name}>{props.label}</label>
        <br/>
        <textarea
            css={textareaInputCss}
            name={props.name}
            value={props.value}
            onChange={props.onChange}/>
    </div>
)

class TextareaInputContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (<TextareaInput
            label={this.props.label}
            name={this.props.name}
            onChange={this.handleChange}
            value={this.state.value}/>)
    }
}

export default class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        alert('form submitted')
        event.preventDefault();
    }

    render() {
        return (
            <Section id='contact'>
                <SectionTitle>Contact</SectionTitle>
                <form
                    onSubmit={this.handleSubmit}
                    css={{
                        width: '800px',
                        marginTop: rhythm(1)
                    }}>
                    <TextInputContainer name='name' label='Name'/>
                    <TextInputContainer name='email' label='Email' type='email'/>
                    <TextInputContainer name='subject' label='Subject'/>
                    <TextareaInputContainer name='message' label='Message'/>
                    <button type='submit' css={{ ...primaryButton, marginTop: rhythm(1 / 2), }}>SUBMIT</button>
                </form>
            </Section>
        )
    }
}