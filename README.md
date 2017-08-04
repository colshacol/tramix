# tramix

> Stylus-like transparent mixins with PostCSS and JavaScript.

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

```css
/* TestComp.css */

.TestComp {
  color: red;
  layout: column;
}
```


```css
/* wherever/you/output/to.css */

.TestComp {
	color: red;
	display: flex;
	flex-direction: column;
	background: plz gimme a bg;
}
```