import React, { Component } from 'react';

import Particle from './Particle';
import { store } from './GameStore';

class ParticleContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			particleMap: [],
			bounds: {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0
			}
		}
		this.boardRef = React.createRef();
	}

	drawParticles = e => {
		if(this.props.draw) {
			let rect = e.target.getBoundingClientRect();
			this.newParticle((e.clientX - rect.x), (e.clientY - rect.y));
		}
	}

	particleLifeCycles = (deletedParticles, newParticles) => {
		deletedParticles.forEach( part => {
			store.particleMap = store.particleMap.filter( toDelete => part.id !== toDelete.id );
		});

		newParticles.forEach( (par, i) => {
			if ( i % store.thin === 0 ) {
				this.newParticle(par.x, par.y);
			}
		});

		this.setState({ particleMap: store.particleMap });
	}

	newParticle = (x, y) => {
		const id = Math.floor(Math.random() * store.speciesSize);
		let valid = store.particleMap.some( part => {
			return part.id === id;
		});

		if( !valid ) {

			const directionMap = [ -1 * store.particleSpacing, store.particleSpacing ];

			store.particleMap.push({
				id: id,
				x: x + directionMap[Math.floor(Math.random() * 2)],
				y: y + directionMap[Math.floor(Math.random() * 2)],
				lives: store.lifeSpan,
				type: this.props.draw
			});

			this.setState({ particleMap: store.particleMap });
		}
	}

	componentDidMount() {
		setInterval(this.handleParticles, store.timeRate);
	}

	handleParticles = () => {
		if(this.props.playing) {

			// const directionMap = [ -1 * store.particleSpacing, store.particleSpacing ];

			let deletedParticles = [],
				newParticles = [];

			store.particleMap = store.particleMap.map( part => {
				let returnObj = {
					...part,
					// x : part.x + directionMap[Math.floor(Math.random() * 2)],
					// y : part.y + directionMap[Math.floor(Math.random() * 2)],
					lives: part.lives - 1
				};

				let checkWet = returnObj.lives;

				returnObj = this.checkForObstacles(returnObj);

				if(checkWet !== returnObj.lives) {
					newParticles.push(returnObj);
				}
				if(!this.checkParticleBounds(returnObj) || returnObj.lives <= 0) {
					deletedParticles.push(returnObj);
				}

				return returnObj;
			})

			this.setState({ particleMap: store.particleMap });
			this.particleLifeCycles(deletedParticles, newParticles);
		}
	}

	checkParticleBounds = particle => {
		return particle.x > store.bounds.left
			&& particle.x < store.bounds.right
			&& particle.y > store.bounds.top
			&& particle.y < store.bounds.bottom
	}

	checkForObstacles = particle => {
		let isWet = false;
		isWet = store.featureMap.some( feature => {
			return (particle.x > feature.x
				&& particle.x < feature.x + feature.size
				&& particle.y > feature.y
				&& particle.y < feature.y + feature.size)
		});
		return isWet ? this.drownParticle(particle) : particle;
	}

	drownParticle = particle => {
		particle = {...particle, lives: particle.lives - store.swimTime};

		Array(store.rebirthRate).fill('_').forEach( _ => this.newParticle(particle.x, particle.y));
		// this.newParticle(particle.x, particle.y);
		return particle;
	}

	render() {
		const particles = this.state.particleMap.map( (item, key) => {
			return <Particle
						key={key}
						attributes={item} />
		});

	    return (<div
	    			ref={this.boardRef}
	    			onClick={this.drawParticles}
	    			style={{ zIndex: (this.props.draw ? 10 : 0) }}
	    			className="particle-container full-size">
	    	{particles}
	    	<div className="particle-edititor full-size"></div>
	    </div>);
	}
}

export default ParticleContainer;
