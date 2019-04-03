import React, { Component } from 'react';

// import { store } from './GameStore';

class Particle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			particle: props.attributes
		}
	}

	render() {
	    return (<div
	    	className={"particle " + this.props.attributes.type }
	    	style={{
	    		left: this.props.attributes.x,
	    		top: this.props.attributes.y
	    	}} >
	    </div>);
	}
}

export default Particle;
