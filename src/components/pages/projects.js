import React, { Component } from 'react';

const Card = (props) => {
	return <a
		target="_blank"
		href={props.url}
		style={{left: props.positions.left, top: props.positions.top}}
		id={props.card}
		onDrag={props.drag}
		onMouseDown={props.click}
		className={"display-card " + props.class}>{}</a>
}

class Projects extends Component {
	constructor() {
		super()
		this.state = {
			cards: [
				{top: 100, left: 300},
				{top: 200, left: 100},
				{top: 600, left: 100}
			],
			inits: [0, 0],
			urls: [
				'https://www.toolboxproject.io',
				'https://amaclean2.github.io',
				'https://devfestsf.com'
			]
		}
	}

	clickCards = e => {
		// let card = this.state.cards[e.target.id],
			
		// console.log(e.clientX, e.clientY);
	}

	dragCards = e => {

		let cards = this.state.cards,
			card = e.target.id;

		if (e.clientX !== 0 && e.clientY !== 0) {
			let truePosX = e.clientX,
				truePosY = e.clientY;

			cards[card].left = truePosX;
			cards[card].top = truePosY;
		}

		this.setState({ cards });
	}

	render() {
	    return (<div className="Projects">
	    	<Card
	    		positions={this.state.cards[0]}
	    		card={0}
	    		drag={this.dragCards}
	    		click={this.clickCards}
	    		url={this.state.urls[0]}
	    		class={'toolbox'} />
	    	<Card
	    		positions={this.state.cards[1]}
	    		card={1}
	    		drag={this.dragCards}
	    		click={this.clickCards}
	    		url={this.state.urls[1]}
	    		class={'lessonbox'} />
	    	<Card
	    		positions={this.state.cards[2]}
	    		card={2}
	    		drag={this.dragCards}
	    		click={this.clickCards}
	    		url={this.state.urls[2]}
	    		class={'devfest'} />
	    </div>);
	}
}

export default Projects;
