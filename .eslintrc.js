module.exports = {
	env: {
		browser: true,
		es6: true,
		jasmine: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
