module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'no-unused-vars': ['off'],
		'no-extend-native': ['error', {
			'exceptions': ['Object', 'Date', 'String', 'Array', 'Function']
		}],
		'no-unneeded-ternary': ['error', {
			'defaultAssignment': false
		}],
		'arrow-parens': 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
};