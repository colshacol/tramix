exports.mapCustomProps = (props) => {
  const propsArray = Object.entries(props);
  return func => {
    propsArray.forEach(func);
  };
};

exports.checkType = (types, value) => {
	const typesIsString = (typeof types === 'string');
	const typesIsArray = Array.isArray(types);

	if (typesIsString) {
		if (types === 'array' && Array.isArray(value)) {
			return true;
		}

		return (typeof value === types);
	}
	
	if (typesIsArray) {
		return types.reduce((final, type) => {
			if (final) { return true }

			if (type === 'array' && Array.isArray(value)) {
				return true;
			}

			if (type === 'null' && value == null) {
				return true;
			}

			return (typeof value === type) ? true : false;
		}, false)
	}

	throw new Error(
		'checkType(): types is not a string or array.'
	);
}