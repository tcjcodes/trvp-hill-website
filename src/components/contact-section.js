import React from 'react'
import { rhythm } from '../utils/typography';
import { Section, SectionTitle } from './section'
import { darkSecondaryColor } from '../utils/colors'
import { primaryButton } from '../utils/buttons'
import { DefaultResponsive } from '../utils/responsive'
import { TextareaInputContainer, TextInputContainer } from './contact-inputs'

class ContactContainer extends React.Component {
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
            <Section
                styles={{
                    width: '100vw',
                    margin: rhythm(1)
                }} id='contact'>
                <SectionTitle>Contact</SectionTitle>
                <form onSubmit={this.handleSubmit} css={{ maxWidth: this.props.isMobile ? '100vw' : '800px', }}>
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
    <DefaultResponsive>{(matches) => <ContactContainer isMobile={!matches} {...props} />}</DefaultResponsive>

export default ResponsiveContact;