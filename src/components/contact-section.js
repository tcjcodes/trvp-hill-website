import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from './section'
import { lightColor } from '../utils/colors'
import { secondaryFont } from '../utils/fonts'
import { primaryButton } from '../utils/buttons'

const labelCss = {
    fontSize: rhythm(4 / 5),
    ...secondaryFont
}
const inputCss = {
    border: 0,
    borderBottom: `1px solid ${lightColor}`,
    padding: `${rhythm(1 / 4)} 0`,
    color: lightColor,
    background: 'transparent',
    fontSize: rhythm(6 / 10),
    width: '100%',
};
const textareaCss = {
    border: 0,
    borderBottom: `1px solid ${lightColor}`,
    margin: `${rhythm(1 / 3)} 0 ${rhythm(1)} 0`,
    padding: `${rhythm(1 / 4)} 0`,
    color: lightColor,
    background: 'transparent',
    fontSize: rhythm(6 / 10),
    resize: 'none',
    height: rhythm(8),
    width: '95%',
};

const TextInput = (props) => (
    <div css={{
        marginBottom: `${rhythm(1)}`,
        width: '45%',
        display: 'inline-block',
        marginRight: rhythm(1)
    }}>
        <label css={labelCss} htmlFor={props.name}>{props.label}</label>
        <br/>
        <input
            css={inputCss}
            name={props.name}
            type={props.type || 'text'}
            value={props.value}
            onChange={props.onChange} />
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
            css={textareaCss}
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
        console.log('form submitted')
        event.preventDefault();
    }

    render() {
        return (
            <Section id='contact'>
                <div css={{
                    width: '800px',
                }}>
                    <SectionTitle>Contact</SectionTitle>
                    <form css={{}}
                          onSubmit={this.handleSubmit}>
                        <TextInputContainer name='name' label='Name' />
                        <TextInputContainer name='email' label='Email' type='email'/>
                        <TextareaInputContainer name='message' label='Message'/>
                        <button type='submit' css={{ ...primaryButton, marginTop: rhythm(1 / 2), }}>SUBMIT</button>
                    </form>
                </div>
            </Section>
        )
    }
}