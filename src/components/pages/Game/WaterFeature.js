import React, { Component } from 'react';

// import { store } from './GameStore';

class WaterFeature extends Component {

	render() {
	    return (<div
	    	className="water"
	    	style={{
	    		top: this.props.y,
	    		left: this.props.x,
	    		width: this.props.size,
	    		height: this.props.size
	    	}}>
	    </div>);
	}
}

export default WaterFeature;
