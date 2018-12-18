import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavDrawer extends Component {
  render() {
    return (
	    <div className={"nav-container " + (this.props.hidden ? 'hidden' : '')}>
	    	<div className="nav-background" onClick={this.props.toggle}></div>
	    	<div className="nav-drawer">
	    		<div className="head-spacing"></div>
	    		<NavLink className={'special-link'} to='/' onClick={this.props.toggle}>Home</NavLink>
	    		<NavLink to='/projects' onClick={this.props.toggle}>Projects</NavLink>
	    		{/*<NavLink to='/ideas' onClick={this.props.toggle}>Ideas</NavLink>*/}
	    		<NavLink to='/blogs' onClick={this.props.toggle}>Notes</NavLink>
	    		<NavLink to='/pictures' onClick={this.props.toggle}>Exploring</NavLink>
	    		<NavLink to='/about' onClick={this.props.toggle}>About Andrew</NavLink>
	    	</div>
	    </div>
    );
  }
}

export default NavDrawer;
