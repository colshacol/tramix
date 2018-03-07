const postcss = require('postcss');
const tramix = require('../tramix');

const INPUT = '.MyComp {\n\ttheme: blue;\n\tsize: full;\n}\n';
const EXPECTED =
	'.MyComp {\n\tcolor: white;\n\tbackground-color: blue;\n\twidth: 100vw;\n\theight: 100vh;\n}\n';

const run = (input, output, opts) => {
	return postcss([tramix(opts)])
		.process(input)
		.then((result) => {
			expect(result.css).toEqual(output);
			expect(result.warnings().length).toBe(0);
		});
};

it('works!', () => {
	return run(INPUT, EXPECTED, TEST_PLUGIN_OPTIONS);
});
