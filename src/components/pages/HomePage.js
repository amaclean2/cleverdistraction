import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './Content';

export default class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
			pages: [
				{ path: 'home', title: 'Home'},
				// { path: 'projects', title: 'Projects'},
				// { path: 'notes', title: 'Notes'},
				// { path: 'exploring', title: 'Exploring'},
				// { path: 'about', title: 'About'}
			]
		}
	}

  	render() {
   		return (<div className="HomePage">
      		<BrowserRouter>
      			<Content title={this.state.title}
      					 pages={this.state.pages} />
      		</BrowserRouter>
      	</div>);
  	}
}
