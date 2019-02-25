import React, { Component } from 'react';

class Controls extends Component {

	render() {
	    return (<div className="Controls">
	    	{/* <button onClick={this.props.toggleLine}>Line</button>
	    	<button onClick={this.props.toggleRectange}>Rectange</button> */}
	    	<div className="menu-button" >
	    		<div className="menu-icon">Draw Water</div>
	    		<ul>
	    			<li onClick={() => this.props.toggleDrawFeatures('smallWater')}>Draw Small Water</li>
	    			<li onClick={() => this.props.toggleDrawFeatures('mediumWater')}>Draw Medium Water</li>
	    			<li onClick={() => this.props.toggleDrawFeatures('largeWater')}>Draw Large Water</li>
	    		</ul>
	    	</div>
	    	<div className="menu-button" >
	    		<div className="menu-icon">Emitter</div>
	    		<ul>
	    			<li onClick={() => this.props.toggleEmitter('herbivore')}>Emit Herbivores</li>
	    			{/*<li onClick={() => this.props.toggleDrawFeatures('carnivore')}>Emit Carnivores</li>*/}
	    		</ul>
	    	</div>
	    	<button onClick={this.props.pause}>Pause</button>
	    	<button onClick={this.props.reset}>Reset</button>
	    </div>);
	}
}

export default Controls;
