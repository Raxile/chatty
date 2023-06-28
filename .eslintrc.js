{
  "env": {
    "browser": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": ["plugin:react/recommended", "standard", "plugin:react-hooks/recommended", "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "jest", "prettier"],
  "settings": {
    "react": {
      "version": "detect" // Automatically detect the react version
    },
    "jest": {
      "version": "detect",
      "globalAliases": {
        "describe": ["context"],
        "fdescribe": ["fcontext"],
        "xdescribe": ["xcontext"]
      }
    }
  },
  "rules": {
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    "semi": [2, "always"],
    "space-before-function-paren": [0, { "anonymous": "always", "named": "always" }],
    "camelcase": 0,
    "no-return-assign": 0,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0
  }
}
