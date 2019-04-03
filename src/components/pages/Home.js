import React, { Component } from 'react';
import FullScreen from 'react-request-fullscreen';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import Game from './Game'

class Home extends Component {
	constructor() {
		super()
		this.state = {
			isFullScreen: false
		}
	}

	toggleFullScreen = isFullScreen => {
		this.setState({ isFullScreen });
	}

	buildBoard() {
		return <FullScreen ref={ref => this.elFullScreenRef = ref} onFullScreenChange={this.toggleFullScreen}>
		    <div
		    	className="game-board"
		    	ref={ref => this.elRef = ref}>
		    	<button
		    		className="full-screen-button"
		    		onClick={() => this.elFullScreenRef.fullScreen(this.elRef)}>
		    			{this.state.isFullScreen ? <MdFullscreenExit /> : <MdFullscreen /> }
		    	</button>
		    	<Game />
		    </div>
		</FullScreen>
	}

	render() {
		let board = this.buildBoard();
	    return (<div className="Home">
			{board}
			<div className="button-box">
				<a target="_blank" href="https://clever-distraction-blog.firebaseapp.com/">Something I Said</a>
				<a target="_blank" href="https://code.cleverdistraction.com">Something I Did</a>
			</div>
	    </div>);
	}
}

export default Home;
