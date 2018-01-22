const themes = {
	blue: {
		color: 'white',
		backgroundColor: 'blue'
	}
}

exports.theme = (value) => {
	return (value in themes) && themes[value];
}