module.exports = {
	extends: ['eslint:recommended', "turbo", 'prettier'],
	plugins: ['svelte3'],
  rules: {
    // tweak custom rules here
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",
  },
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
