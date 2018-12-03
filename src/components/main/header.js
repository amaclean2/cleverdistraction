import React, { Component } from 'react';
import NavDrawer from './nav';

class Header extends Component {
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
      		<div className="header">
        		<i className="fa fa-bars menu-clickable" aria-hidden="true" onClick={this.toggleNavVis} ></i>
        		<NavDrawer toggle={this.toggleNavVis} hidden={this.state.navShow} />
      		</div>
    	);
  	}
}

export default Header;
