import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Notes from './Notes';
import Exploring from './Exploring';
import About from './About';

const componentTree = [
	{ home: Home },
	{ projects: Projects },
	{ notes: Notes },
	{ exploring: Exploring },
	{ about: About }
]

class Content extends Component {

	renderPaths() {
		let routes = componentTree.map((page, key) => {
			for ( let key in page ) 
				return <Route key={key + 'page'} exact path={'/' + key} component={page[key]} />
		});
		routes.unshift(<Route key={-1} exact path={'/'} component={Home} />);
		return <div className="page-view">{routes}</div>
	}

	render() {
		let paths = this.renderPaths();
	    return <div className="Content">
	    	<Header title={this.props.title} 
	    			pages={this.props.pages} />
	    	{paths}
	    </div>
	}
}

export default Content;
