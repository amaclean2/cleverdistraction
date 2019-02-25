import React, { Component } from 'react';

import ParticleContainer from './ParticleContainer';
import FeatureContainer from './FeatureContainer';

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			featureMap: [],
			particleMap: []
		}
	}

	renderParticles() {
		return <ParticleContainer
				playing={this.props.playing}
				particleMap={this.state.particleMap}
				draw={this.props.drawFunctions.emitter}/>
	}

	renderFeatures() {
		return <FeatureContainer
				playing={this.props.playing}
				featureMap={this.state.featureMap}
				draw={this.props.drawFunctions.features}/>
	}

	render() {
		const features = this.renderFeatures(),
			  particles = this.renderParticles();

	    return (<div
	    	className="board full-size"
	    	onClick={this.pickDrawFunction} >
	    	{features}
	    	{particles}
	    </div>);
	}
}

export default Board;
