const themes = {
	blue: [
		'color: white',
		'background: blue',
	],
}

exports.theme = (value) => {
	if (value in themes) {
		return themes[value];
	}
}