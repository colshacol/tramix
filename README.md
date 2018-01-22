# tramix

> Stylus-like transparent mixins with PostCSS and JavaScript.

## 1. Include tramix in your PostCSS configuration.

```javascript
// ./postcss.config.js

const postcss = require('postcss')
const tramix = require('tramix')
const path = require('path')

module.exports = {
    plugins: [
        tramix({
            include: path.resolve(__dirname, 'path/to/mixins.js'),
        }),
    ],
}
```

## 2. Define your mixins.

```javascript
// mixins.js

const themes = {
	blue: {
		color: 'white',
		backgroundColor: 'blue'
	}
}

exports.theme = (value) => {
	return (value in themes) && themes[value];
}
```

## 3. Write some CSS.

```css
/* TestComp.css */

.MyComp {
	theme: blue;
}
```

## 3. Enjoy.

```css
/* wherever/you/output/to.css */

.MyComp {
	color: white;
	background-color: blue;
}
```

# Rules

- Each exported member of your `options.include` mixins file must be a function that will accept one parameter `value` and return an CSS-like object to be converted into actual CSS.
- Don't use custom property names beginning with weird characters ($, !, #, etc) because it just won't work (yet).
- Be a good chap and don't try to get away with creating custom mixins based on existing property names.