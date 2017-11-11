import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from './section'
import { darkSecondaryColor } from '../utils/colors'
import { primaryButton } from '../utils/buttons'
import { Desktop } from '../utils/responsive'
import { TextareaInputContainer, TextInputContainer } from './contact-inputs'

class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        !this.props.isMobile && alert('form submitted')
        event.preventDefault();
    }

    render() {
        return (
            <Section
                styles={{
                    width: !this.props.isMobile && '100vw',
                    margin: rhythm(1)
                }} id='contact'>
                <SectionTitle>Contact</SectionTitle>
                <form onSubmit={this.handleSubmit} css={{ maxWidth: !this.props.isMobile && '900px', }}>
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

const ResponsiveContact = (props) =>
    <Desktop>{(matches) => <ContactContainer isMobile={!matches} {...props} />}</Desktop>

export default ResponsiveContact;