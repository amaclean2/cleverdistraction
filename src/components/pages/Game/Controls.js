import React, { Component } from 'react';

class Controls extends Component {

	render() {
	    return (<div className="Controls">
	    	<button onClick={this.props.toggleLine}>Line</button>
	    	<button onClick={this.props.toggleRectange}>Rectange</button>
	    </div>);
	}
}

export default Controls;
