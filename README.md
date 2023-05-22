# Notes

Step 1: `yarn create react-app .`

Step 2: `yarn eject` => eslint gives `Parsing error: [BABEL] /Users/.../Documents/dev/learning/js-legacy-with-ts/src/components/AddButton.jsx: Using `babel-preset-react-app`requires that you specify`NODE_ENV`or`BABEL_ENV` environment variables. Valid values are "development", "test", and "production". Instead, received: undefined. (While processing: "/Users/.../Documents/dev/learning/js-legacy-with-ts/node_modules/babel-preset-react-app/index.js")`

Step 3: Change the "eslintConfig" section in the package.json:

```
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "parserOptions": {
      "babelOptions": {
          "presets": [
             ["babel-preset-react-app", false],
             'babel-preset-react-app/prod'
          ]
      }
    }
  },
}
```

(https://github.com/facebook/create-react-app/issues/12070#issuecomment-1127489727)

Step 4: Install TypeScript and other dependencies with `yarn add typescript @types/node @types/react @types/react-dom @types/jest`

Step 5: Add a `tsconfig.json` with

```
{
  "compilerOptions": {
    "outDir": "build/dist",
    "module": "commonjs",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "rootDir": "src",
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": false,
    "strictNullChecks": true
  },
  "exclude": ["node_modules", "config", "build", "scripts", "acceptance-tests", "webpack", "jest", "src/setupTests.ts"],
  "types": ["typePatches"]
}
```

(derived from: https://github.com/microsoft/TypeScript-React-Starter/blob/master/tsconfig.json and https://stackoverflow.com/a/65539274)

Step 6: Run `yarn start` or `yarn build` and check for errors
