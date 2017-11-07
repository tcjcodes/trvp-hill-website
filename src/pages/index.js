import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import Hero from '../components/hero';
import MusicSection from "../components/music-section";
import MerchSection from '../components/merch-section';
import AboutSection from '../components/about-section';
import Footer from '../components/footer'
import Navigation from '../components/navigation'

export default class IndexPageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = { activeWaypoints: [] };
    }

    handleEnter(params) {
        console.log('entered', JSON.stringify(params));

        if (this.state.activeWaypoints.indexOf(params.id) < 0) {
            this.setState((prevState) => ({
                activeWaypoints: [...prevState.activeWaypoints, params.id],
            }));
        }
    }

    handleLeave(params) {
        console.log('left', JSON.stringify(params));
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
        <Navigation activeWaypoints={props.activeWaypoints}/>
        <div>
            <Hero onWaypointEnter={props.onWaypointEnter} onWaypointLeave={props.onWaypointLeave}/>
            <div
                css={{
                    margin: '0 auto',
                    maxWidth: 1200,
                    padding: `0px ${rhythm(1.08)} ${rhythm(1.45)}`,
                    paddingTop: 0,
                }}>
                <MusicSection/>
                <MerchSection/>
                <AboutSection/>
                <Footer/>
            </div>
        </div>
    </div>
)

IndexPage.propTypes = {
    activeWaypoints: PropTypes.array,
    onWaypointEnter: PropTypes.func,
    onWaypointLeave: PropTypes.func,
}
// export default IndexPage
