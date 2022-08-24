# React 17 - Getting started

### Setup from scratch

1. Initialize npm project. Use command to add package.json file.

```batch
npm init
```

2. Install packages required for Babel. It is needed for supporting JSX syntax.

```batch
npm install -D @babel/core @babel/preset-react babel-loader @babel/plugin-syntax-jsx
```

3. Install Webpack packages

```batch
npm install -D html-webpack-plugin webpack webpack-cli webpack-dev-server
```

4. Install React packages

```batch
npm install react react-dom
```

5. Add at root level the webpack.config.js file

```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [htmlPlugin],
};
```

6. Add babel.config.json file

```json
{
  "presets": ["@babel/preset-react"]
}
```

7. Create src folder, and add **index.html** and **index.js** files as startup point.

### <br>

## What is ReactJS?

A JavaScript library for building user interfaces. It's declarative for describe UIs.

| Framework                  | Library |
| -------------------------- | ------- |
| Limited flexibility        | ---     |
| Hard to deviate            | ---     |
| Large and full of features | ---     |
| Hard to customize          | ---     |
| Use the whole thing        | ---     |

### ReactJs advantages:

- Virtual DOM vs DOM API.
- Just JavaScript.
- React Native (Mobile apps)
- Battle-tested, new features are tested properly.
- Declarative language (model UI and state).

### ReactJS elements

- Components (Function/Class)

  - Like functions.
  - Input: props, state.
  - Output: UI.
  - Reausable and composable.
  - Can manage a private state.
  - Stateful.

- Reactive updates

  - Reflect changes to the browser. React will react updating part of DOM.

- Virutal views in memory
  - Generate HTML using JavaScript.
  - No HTML template language.
  - Tree reconciliation (Virtual DOM).

## Components

- props

  - It represents inputs like HTML attributes.
  - It is inmutable.
  - It represents fixed values.

- state
  - It representst the internal state of a Component.
  - It is mutable, and its value can change.

### React DOM API

Renders a React component

- arg1: React component definition either JSX statement or ...
- arg2: DOM element which will act as container.

```javascript
ReactDOM.render(arg1, arg2);
```

Creates an HTML element using React API

```javascript
React.createElement(element, attributes, childElements);
```

### React Hooks

```javascript
const [currentStateValue, functionToSetNewStateValue] =
  useState(initialStateValue);
```

# Module 3 - Modern Javascript Crash Course

## Move Scripts sections to main README file

## Available Scripts

In the project directory, you can run:

### `npm start`

npm i -D babel-core babel-loader babel-preset-env babel-preset-react

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
