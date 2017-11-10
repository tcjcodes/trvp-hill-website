import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import Navigation from '../components/navigation'
import ContactContainer from '../components/contact-section'
import Hero from '../components/hero';
import MusicSection from "../components/music-section";
import MerchSection from '../components/merch-section';
import AboutSection from '../components/about-section';
import Footer from '../components/footer'
import { DefaultResponsive, Desktop, Tablet } from '../utils/responsive'

class IndexPageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = { activeWaypoints: [] };
    }

    handleEnter(params) {
        if (this.state.activeWaypoints.indexOf(params.id) < 0) {
            this.setState((prevState) => ({
                activeWaypoints: [...prevState.activeWaypoints, params.id],
            }));
        }
    }

    handleLeave(params) {
        this.setState((prevState) => ({
            activeWaypoints: prevState.activeWaypoints.filter(w => w !== params.id)
        }));
    }

    render() {
        return <IndexPage activeWaypoints={this.state.activeWaypoints}
                          onWaypointEnter={this.handleEnter}
                          onWaypointLeave={this.handleLeave}/>;
    }
}

const IndexPage = (props) => (
    <div>
        <DefaultResponsive><Navigation activeWaypoints={props.activeWaypoints}/></DefaultResponsive>
        <div>
            <Hero onWaypointEnter={props.onWaypointEnter} onWaypointLeave={props.onWaypointLeave}/>
            <MusicSection/>
            <MerchSection/>
            <AboutSection/>
            <ContactContainer/>
            <Footer/>
        </div>
    </div>
)

IndexPage.propTypes = {
    activeWaypoints: PropTypes.array,
    onWaypointEnter: PropTypes.func,
    onWaypointLeave: PropTypes.func,
}

export default IndexPageContainer

