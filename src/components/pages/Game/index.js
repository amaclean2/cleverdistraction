import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Controls from './Controls';
import Board from './Board';
import { store } from './GameStore';

class Game extends Component {
	constructor() {
		super()
		this.state = {
			activeDrags: 0,
			controlledPosition: {
				x: -400,
				y: 200
			},
			draw: {
				line: false,
				rectange: false,
				features: false,
				emitter: false
			},
			playing: true
		}
	}

	onStart = () => {
	}

	onStop = () => {
	}

	reset = () => {
		store.particleMap = [];
	}

	moveBoard = e => {
		let boardPosition = this.state.boardPosition,
			screen = this.screenParams.current,
			screenX = screen.getBoundingClientRect().x,
			screenY = screen.getBoundingClientRect().y;

		if (e.clientX !== 0 || e.clientY !== 0) {
			boardPosition.x = e.clientX - screenX;
			boardPosition.y = e.clientY - screenY;
		}

		this.setState({ boardPosition });
	}

	toggleDrawFeatures = size => {
		let draw = this.state.draw;
		for ( let key in draw ) draw[key] = false;
			draw.features = size;
		this.setState({ draw });
	}

	toggleEmitter = type => {
		let draw = this.state.draw;
		for ( let key in draw ) draw[key] = false;
			draw.emitter = type;
		this.setState({ draw });
	}

	pause = () => {
		this.setState({ playing: !this.state.playing });
	}

	drawBoard() {
		const handlers = {onStart: this.onStart, onStop: this.onStop};
		return <Draggable onDrag={this.handleDrag} {...handlers}>
            <div className="board-container"
	            style={{
	            	width: store.bounds.right,
	            	height: store.bounds.bottom,
	            }}>
	            <Board drawFunctions={this.state.draw} playing={this.state.playing} />
            </div>
        </Draggable>
	}

	render() {
		const board = this.drawBoard();
	    return (<div className="Game">
	    	{board}
	    	<Controls 
	    		toggleEmitter={this.toggleEmitter}
	    		toggleDrawFeatures={this.toggleDrawFeatures}
	    		reset={this.reset}
	    		pause={this.pause}/>
	    </div>);
	}
}

export default Game;
