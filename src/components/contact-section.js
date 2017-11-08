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

class TextFormGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div css={{
                marginBottom: `${rhythm(1)}`,
                width: '45%',
                display: 'inline-block',
                marginRight: rhythm(1)
            }}>
                <label css={labelCss} htmlFor={this.props.name}>{this.props.label}</label>
                <br/>
                <input
                    css={inputCss}
                    name={this.props.name}
                    type={this.props.type || 'text'}
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </div>
        )
    }
}

class TextareaFormGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div css={{}}>
                <label css={labelCss} htmlFor={this.props.name}>{this.props.label}</label>
                <br/>
                <textarea
                    css={textareaCss}
                    name={this.props.name}
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </div>
        )
    }
}

export default class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Section>
                <div css={{
                    width: '800px',
                }}>
                    <SectionTitle>Contact</SectionTitle>
                    <form css={{}}
                          onSubmit={this.handleSubmit}>
                        <TextFormGroup name='name' label='Name'/>
                        <TextFormGroup name='email' label='Email' type='email'/>
                        <TextareaFormGroup name='message' label='Message'/>
                        <button css={{ ...primaryButton, marginTop: rhythm(1 / 2), }}>SUBMIT</button>
                    </form>
                </div>
            </Section>
        )
    }
}