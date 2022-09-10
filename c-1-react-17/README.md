# React 17 - Getting started

### Setup from scratch

Reference: https://jscomplete.com/learn/1rd-reactful

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

### useState
Functions that returns two elements: currentStateValue, and a function to update state value.
It also receives one parameter. The initialStateValue.

```javascript
const [currentStateValue, functionToSetNewStateValue] =
  useState(initialStateValue);
```

### useEffect
This Reack Hook will be invoked every time the owner Component is rendered. It receives a Callback function to be executed.
```javascript
useEffect(callbackFn);
useEffect(() => {
  // Function invokes every time component is updated and rendered.

  // Returned functions is useful to invoke logic before useEffect gets called.
  // It is usually needed to clean side effects up.
  return () => console.log('Component is going to be rendered');
});
```

## Modern JavaScript

### DataTypes

- Number
- String
- Boolean
- Array
- Object

ECMAScript 2015 (ECMAScript 6)

### Block and Functions Scopes

```javascript
{
  // Block scope
}
function sum(a, b) {
  // Function scope
  // Call stack
}
```

### const keyword

- String data type is inmutable by default in JavaScript
- Using **const** keyword ensures value and reference are inmutable for scalar values.
- Using **const** keyword on Arrays or Objects just guarantees the reference will be the same, and cannot be changed. However, Array itemas can be modified as well as Object properties.

```javascript
const answer = 42;
const greeting = "Hello!";

const numbers = [1, 2, 3, 4];
const person = {
  firstName: "John",
  lastName: "Snow",
};
```

### Arraw functions

Regular functions give access to "calling" enviroment while Arraw functions give access to their "defining" environment.

```javascript
function sum(a, b) {
  // "this" here is the caller of sum.
}
const sum = function (a, b) {
  // "this" here is the caller of sum.
};

// Arraw function
const sum = (a, b) => {
  // Here, "this" is not the caller of sum.
  // It's the same "this" found in sum's scope.
};
```

### Destructing

```javascript
const Math = {
  PI: 3.1416,
  E: 1,12,
  SQRT: 45
}

// 1. Destructing Object's properties
const {PI, E, SQRT} = Math;
const {Component, Fragment, useState} = require("react");

// 2. Destructing when invoking functions
const circle = {
  label: "circleX",
  radius: 10
};

// Function definition basically says.
// Parameter expects an object with a radius property
// Second argument is option {}, and uses a default value of 2.
const circleArea = ({radius}, {precision: 2} = {}) => {
  return (Math.PI * radius * radius).toFixed(precision);
};

circleArea(circle, {precision: 5});

// 3. Destrucing Arrays
const [first, second, , forth] = [1, 2, 3, 4];
```

### Rest operator

In the example, we are asking JavaScript to destruct **first** item, and create a new Array (**restOfItems**) containing the rest of elements.

```javascript
const [first, ...restOfItems] = [1, 2, 3, 4];
const [...newArray] = [1, 2, 3, 4];
const { ...person } = {};
```

# Module 6 (Setting Up a Development Environment...)

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
