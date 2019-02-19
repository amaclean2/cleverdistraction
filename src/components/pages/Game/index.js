import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Controls from './Controls';

class Game extends Component {
	constructor() {
		super()
		this.state = {
			boardSize: {
				width: 1000,
				height: 1000
			},
			activeDrags: 0,
			deltaPosition: {
				x: 0,
				y: 0
			},
			controlledPosition: {
				x: -400,
				y: 200
			},
			draw: {
				line: false,
				rectange: false
			}
		}
	}

	onStart = () => {
		this.setState({ activeDrags: ++this.state.activeDrags });
	}

	onStop = () => {
		this.setState({ activeDrags: --this.state.activeDrags });
	}

	handleDrag = (e, ui) => {
		const {x, y} = this.state.deltaPosition;
		this.setState({
			deltaPosition: {
				x: x + ui.deltaX,
				y: y + ui.deltaY
			}
		});
	}

	moveBoard = e => {
		let boardPosition = this.state.boardPosition,
			screen = this.screenParams.current,
			screenX = screen.getBoundingClientRect().x,
			screenY = screen.getBoundingClientRect().y,
			boardX = e.target.getBoundingClientRect().x,
			boardY = e.target.getBoundingClientRect().y;


		if (e.clientX !== 0 || e.clientY !== 0) {
			boardPosition.x = e.clientX - screenX;
			boardPosition.y = e.clientY - screenY;
		}

		this.setState({ boardPosition });
	}

	toggleLine = () => {
		let draw = this.state.draw;
		for ( let key in draw ) draw[key] = false;
		draw.line = !this.state.draw.line;
		this.setState({ draw });
	}

	toggleRectange = () => {
		let draw = this.state.draw;
		for ( let key in draw ) draw[key] = false;
		draw.rectange = !this.state.draw.rectange;
		this.setState({ draw });
	}

	drawBoard() {
		const handlers = {onStart: this.onStart, onStop: this.onStop};
		return <Draggable onDrag={this.handleDrag} {...handlers}>
            <div className="board"
            style={{
            	width: this.state.boardSize.width,
            	height: this.state.boardSize.height,
            }}>
            </div>
            </Draggable>
		return <div
			className="board"
			onDrag={this.moveBoard}
			style={{
				width: this.state.boardSize.width,
				height: this.state.boardSize.height
			}}>

		</div>
	}

	render() {
		const board = this.drawBoard();
	    return (<div className="Game">
	    	{board}
	    	<Controls 
	    		toggleRectange={this.toggleRectange}
	    		toggleLine={this.toggleLine} />
	    </div>);
	}
}

export default Game;
