import React, { Component } from 'react';
// import NavDrawer from './nav';

class Home extends Component {
	constructor() {
		super()
		this.state = {
			navShow: true,
		}

		this.toggleNavVis = this.toggleNavVis.bind(this);
	}

	toggleNavVis() {
		this.setState({ navShow: !this.state.navShow });
	}

  	render() {
    	return (
      		<div className="title-text">
        		<h1>Clever Distraction</h1>
      		</div>
    	);
  	}
}

export default Home;
