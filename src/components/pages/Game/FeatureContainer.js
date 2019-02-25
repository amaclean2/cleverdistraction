import React, { Component } from 'react';

import WaterFeature from './WaterFeature';
import { store } from './GameStore';

class FeatureContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			featureMap: []
		}
	}

	drawFeatures = e => {
		if(this.props.draw) {
			const rect = e.target.getBoundingClientRect();

			store.featureMap.push({ x: (e.clientX - rect.x), y: (e.clientY - rect.y), size: store[this.props.draw] });
			this.setState({ featureMap: store.featureMap });
		}
	}

	render() {
		const features = this.state.featureMap.map( (item, key) => {
			return <WaterFeature key={key} x={item.x} y={item.y} size={item.size} />
		});

	    return (<div
	    			style={{ zIndex: (this.props.draw ? 10 : 0) }}
	    			onClick={this.drawFeatures}
	    			className="feature-container full-size">
	    	{features}
	    	<div className="feature-edititor full-size"></div>
	    </div>);
	}
}

export default FeatureContainer;
