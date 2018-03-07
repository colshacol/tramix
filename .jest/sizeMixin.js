const size = {
	full: {
		width: '100vw',
		height: '100vh'
	}
};

exports.size = (value, rule) => {
	return value in size && size[value];
};
