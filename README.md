# tramix

> Stylus-like transparent mixins with PostCSS and JavaScript.

Include tramix in your PostCSS configuration:

```javascript
// ./postcss.config.js

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
```

Define your mixins:

```javascript
// ./mixins.js

exports.layout = (value: string, decl: Object) => {
	if (value === 'column') {
		return [
			'display: flex',
			'flex-direction: column',
			'background: plz gimme a bg',
		]
	}
}
```

Input css:

```css
/* TestComp.css */

.TestComp {
  color: red;
  layout: column;
}
```

Finished product:

```css
/* wherever/you/output/to.css */

.TestComp {
	color: red;
	display: flex;
	flex-direction: column;
	background: plz gimme a bg;
}
```