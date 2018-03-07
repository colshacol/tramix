const themes = {
	blue: {
		color: 'white',
		backgroundColor: 'blue'
	}
};

exports.size = require('./sizeMixin').size;

exports.theme = (value) => {
	return value in themes && themes[value];
};
