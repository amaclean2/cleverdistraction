import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	renderTabs() {
		if(this.props.pages) {
			const pages = this.props.pages.map( (page, key) => {
				return <NavLink key={key + 'i'} to={"/" + page.path} >{page.title}</NavLink>
			});
			return <div className="tabs">{pages}</div>
		}
	}

	render() {
		let tabs = this.renderTabs();

	    return (<div className="Header">
	    	{tabs}
	      	<div className="flex-spacer"></div>
	      	{this.props.title}
	    </div>);
	}
}

Header.propTypes = {
	pages: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}

export default Header;
