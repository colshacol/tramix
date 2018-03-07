# tramix

> Transparent CSS mixins with PostCSS and JavaScript.

tramix allows you to write transparent mixins in JavaScript to be used in your CSS. The result is simple, native-feeling, and DRY CSS.

## Install

```bash
npm i -D tramix
```

or, for yarn users:

```bash
yarn add --dev tramix
```

## Usage

### Configuration

Configuration for tramix is extremely simple, opens up a world of possibilities. In order to get set up, you just need to add tramix to your PostCSS configuration.

If your configuration lives in your `package.json` or `.postcssrc`:

```js
	"plugins": {
		"tramix": {
			"include": './path/from/package/to/mixins.js'
		}
	}
```

If your configuration lives in a `.js` config file, be sure to remember to make the `include` path the path to your main mixins file **relative to your `package.json`**:

```js
plugins: [
	require('tramix')({
		include: './path/from/package/to/mixins.js'
	})
];
```

### Defining Mixins

tramix accepts a single point of entry for mixins. Each named export of that entry point should be a mixin function that takes one or two arguments: `value` and `rule`. This can be done by defining all mixins in one file and exporting them each by name (not-recommended), or defining mixins in different files, importing them into the entry mixins file, and exporting them by name there (recommended).

In this example, the mixin we are exporting is `theme`. When tramix encounters a CSS rule with a `theme` declaration, it will process the declaration based on your provided function.

Exported mixins should return an object of CSS-compatible key/value pairs. (camelCase properties are acceptable, i.e: `backgroundColor` for the CSS equivalent `background-color`.)

```js
// mixins.js

const themes = {
	blue: {
		color: 'white',
		backgroundColor: 'blue'
	},
	invalid: (value) => ({
		theme: `invalid value: ${value}`
	})
};

exports.theme = (value, rule) => {
	return value in themes ? themes[value] : themes.invalid(value);
};
```

In the above example, if `theme: blue;` is found in a CSS rule, it will transform it into `color: white; background-color: blue;`. But if something like `theme: red;` is found (which is not a supported value for this mixin), then the output CSS would be `theme: 'invalid value: red`.

### Dynamic Mixins

Whereas mixins are just fine for keeping your code DRY, tramix offers the `rule` parameter in your mixin declarations that allows you to inspect the rule currently being parsed and return your new declarations to be applied to it based off of its current state. The `rule` parameter is a plain `Object` version of the current state of the `rule` while this declaration is being processed.

Here is an exmple where we simplify the `justify-content` and `align-items` properties that accompany `display: flex;`.

_Note: When an element has `display: flex;` it defaults also to `flex-direction: row;`. When flex-direction is `row` or `row-reverse`, then `justify-content` controls horizontal alignment and `align-items` controls vertical alignment. When flex-direction is `column` or `column-reverse`, then `justify-content` controls vertical alignment and `align-items` controls horizontal alignment. Confusing, right?_

```css
.classy {
	display: flex;
	flex-direction: column;
	flexalignx: space-between;
	flexaligny: center;
}
```

```js
exports.flexAlignX = (value, rule) => {
	const decls = {};

	if (['row', 'row-reverse'].includes(rule['flex-direction'])) {
		decls.justifyContent = value;
	} else if (['column', 'column-reverse'].includes(rule['flex-direction'])) {
		decls.alignItems = value;
	}
};

exports.flexAlignY = (value, rule) => {
	const decls = {};

	if (['row', 'row-reverse'].includes(rule['flex-direction'])) {
		decls.alignItems = value;
	} else if (['column', 'column-reverse'].includes(rule['flex-direction'])) {
		decls.justifyContent = value;
	}

	return decls;
};
```

Now, the output of our mixins will be:

```css
.classy {
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;
}
```

## Caveats

* You should not use simple mixin names that could potentially be introduced into the CSS spec in the future. For this reason, `camelCase` mixin names are advised.
* You should not use mixin names beginning with uncommon characters (!, #, etc) because it will absolutely break your CSS linter (lol) and potentially break your CSS transpiling as a whole. _"$" is supported by tramix, and it may help you create mixin names that will never be standardized and cause problems, but it is stil a good practice just to avoid it._
