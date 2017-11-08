import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from './section'
import { darkColor, lightColor } from '../utils/colors'

export default class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Section>
                <SectionTitle>Contact</SectionTitle>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input
                        css={{
                            border: `1px solid ${lightColor}`,
                            margin: `0 ${rhythm(1/2)}`,
                            padding: rhythm(1/4),
                            color: lightColor,
                            background: 'transparent'
                        }}
                        name='name'
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                </form>
            </Section>
        )
    }
}