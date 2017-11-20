import React from 'react'
import { rhythm } from '../utils/typography';
import { Desktop } from '../utils/responsive'
import { Section, SectionTitle } from './section'
import { darkSecondaryColor } from '../utils/colors'
import { primaryButton } from '../utils/buttons'
import { TextareaInput, TextInput } from './contact-inputs'

const encode = (data) =>
    (Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&'));

class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { formStatus: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleChange(e) {
        this.setState({ formStatus: null })
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => this.setState({ formStatus: 'success' }))
            .catch(error => this.setState({ formStatus: 'error' }));

        e.preventDefault();
    }

    handleBack(e) {
        e.preventDefault();
        this.setState({ formStatus: null })
    }

    render() {
        return (
            <Section
                styles={{
                    width: !this.props.isMobile && '100vw',
                    margin: rhythm(1)
                }} id='contact'>
                <SectionTitle>Contact</SectionTitle>
                {this.state.formStatus !== 'success' && <form name='contact'
                      method='post'
                      action='thank-you'
                      data-netlify='true'
                      data-netlify-honeypot='bot-field'
                      onSubmit={this.handleSubmit}
                      css={{ maxWidth: !this.props.isMobile && '900px', }}>
                    <input hidden='true' name='bot-field'/>
                    <TextInput name='name' label='Name' required onChange={this.handleChange}/>
                    <TextInput name='email' label='Email' type='email' required onChange={this.handleChange}/>
                    <TextInput name='subject' label='Subject' required onChange={this.handleChange}/>
                    <TextareaInput name='message' label='Message' required onChange={this.handleChange}/>
                    <button type='submit' css={{ ...primaryButton, marginTop: rhythm(1 / 2), }}>SUBMIT</button>
                </form>}
                {this.state.formStatus === 'success' && <div>
                    <p>Thank you for contacting us! We'll get back to you shortly.</p>
                    <button type='button'
                            onClick={this.handleBack}
                            css={{ ...primaryButton, marginTop: rhythm(1 / 2), }}>Back to form</button>
                </div>}
                {this.state.formStatus === 'error' &&
                <p>Oh no, something went wrong! Please try again later or contact us on Facebook.</p>}
            </Section>
        )
    }
}

const ResponsiveContact = (props) =>
    <Desktop>{(matches) => <ContactContainer isMobile={!matches} {...props} />}</Desktop>

export default ResponsiveContact;