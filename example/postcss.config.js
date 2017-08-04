const postcss = require('postcss')
const tramix = require('tramix')
const path = require('path')

module.exports = {
	plugins: [
		tramix({
			include: path.resolve(__dirname, 'mixins.js'),
		}),
	],
}