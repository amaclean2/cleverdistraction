export const store = {
	particleMap: [],
	featureMap: [],
	smallWater: 10,
	mediumWater: 20,
	largeWater: 50,
	swimTime: 30,
	lifeSpan: 40,
	particleSpacing: 2,
	speciesSize: 1000,
	timeRate: 100,
	thin: 2,

	bounds: {
		top: 0,
		left: 0,
		right: 1000,
		bottom: 1000
	},

	herbivoreRules: {
		water: 5,
		food: 0
	},

	carnivoreRules: {
		water: 3,
		food: 2
	}
}

window.store = store;