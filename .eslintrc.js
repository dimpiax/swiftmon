module.exports = {
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "plugins": [
        "flowtype", "security"
    ],
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "globals": {
        "atom": true
    },
    "rules": {
        "no-undef": 2,
        "no-lonely-if": 0,
        "indent": [
            "error",
            4, {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error", "unix"
        ],
        "quotes": [
            2, "single"
        ],
        "semi": [
            2, "never"
        ],
        "spaced-comment": 1,
        "no-param-reassign": [
            "error", {
                "props": false
            }
        ],
        "no-bitwise": 0,
        "brace-style": 0,
        "no-console": 0,
        "global-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": [
            "error", {
                "ignore": ["atom"]
            }
        ],
        "no-underscore-dangle": 0,
        "max-len": 0,
        "no-continue": 0,
        "comma-dangle": 0,
        "no-restricted-syntax": 0,
        "class-methods-use-this": 0,
        "array-bracket-spacing": 0,
        "object-curly-spacing": 0,
        "no-empty-function": 0,
        "arrow-parens": 0,
        "one-var": 0,
        "no-unused-vars": [
            2, {
                "args": "none"
            }
        ],
        "no-use-before-define": [
            2, {
                "classes": false
            }
        ],
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1,
        "flowtype/boolean-style": [
            2, "boolean"
        ],
        "flowtype/define-flow-type": 1,
        "flowtype/delimiter-dangle": [
            2, "never"
        ],
        "flowtype/generic-spacing": [
            2, "never"
        ],
        "flowtype/no-primitive-constructor-types": 2,
        "flowtype/no-weak-types": 0,
        "flowtype/object-type-delimiter": [
            2, "comma"
        ],
        "flowtype/require-parameter-type": 2,
        "flowtype/require-return-type": [
            2,
            "always", {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/require-valid-file-annotation": 2,
        "flowtype/semi": [
            2, "always"
        ],
        "flowtype/space-after-type-colon": [
            2, "always"
        ],
        "flowtype/semi": [
            2, "never"
        ],
        "flowtype/space-before-generic-bracket": [
            2, "never"
        ],
        "flowtype/space-before-type-colon": [
            2, "never"
        ],
        "flowtype/type-id-match": [
            2, "^([A-Z][a-z0-9]+)+Type$"
        ],
        "flowtype/union-intersection-spacing": [2, "always"]
    }
}
