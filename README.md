# Eslint + Prettier + Typescript Basic configuration

Simple react application: 
- eslint
- prettier
- typescript

## package.json

```
 "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.68",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-plugin-react": "^7.33.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
}
```

## Prettierrc.json

```
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
}
```

## PrettierIgnore

```
node_modules
# Ignore artifacts:
build
Coverage
```

## Eslintrc.json

```
{
    "env": {
      "browser": true,
      "es2021": true,
      "jest": true
    },
    "extends": [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:import/recommended"
      // "airbnb"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [ "react", "@typescript-eslint", "react-hooks" ],
    "rules": {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [ "error" ],
      "react/jsx-filename-extension": [ "warn", { "extensions": [ ".tsx" ] } ],
      "import/extensions": [ "error", "ignorePackages", { "ts": "never", "tsx": "never" } ],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": [ "error" ],
      "@typescript-eslint/explicit-function-return-type": [ "error", { "allowExpressions": true } ],
      "max-len": [ "warn", { "code": 100, "ignoreComments": true, "ignoreUrls": true } ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "prettier/prettier": [ "error", { "endOfLine": "auto" } ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      },
      "react": {
        "version": "detect"
      }
    }
  }
```

## Autosave Visual Studio Code configuration

```
{
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ],
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "editor.formatOnSave": true, 
    "eslint.alwaysShowStatus": true, 
    "files.autoSave": "onFocusChange" 
}
```