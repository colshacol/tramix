const { concatRegExString } = require('./concatRegExString');

exports.toRegEx = (props) => {
	const length = props.length - 1;
	return new RegExp(
		props.reduce((final, prop, i) => {
			return concatRegExString(final, prop, i === length);
		}, '^(') + ')$',
		''
	);
};
