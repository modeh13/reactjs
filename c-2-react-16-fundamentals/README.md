# C-2 React 16 Fundamentals

## Configuring React app to support Typescript

npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
npm i -D jest babel-jest react-test-renderer
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17

## Props validations

### Using prop-types

React includes a package named 'prop-types'. It offers a manner to validat **props** at runtime.
It has different helpers to validate properties.

```javascript
const Component = (props) => {
  // ...
};

Component.propTypes = {
  a: PropTypes.number.isRequired,
};
```

### Using interface Typescript

```typescript
interface ComponentProps {
  a: number;
}

const Component = (props: ComponentProps) => {
  // ...
};
```

## JSX

JSX is an extensible Javascript syntax. It allows to use XML syntax within Javascript code.
To use JSX, we need to translate JS files using a pre-processor like **babel** (JSX Transformer).
Since React can be used along with Typescript. You wouldn't need to use any babel loader. Typescript supports JSX.

JSX syntax

```jsx
<h1>
  <Component a={4} />
</h1>
```

JavaScript

```javascript
React.createElement("h1", null, React.createElement(Component, { a: 5 }, null));
```

### Child Expressions and Elements

**props** object has a special property called **children** which allows to access Children components from a parent.

```jsx
<Component>
   <Child1>
   <Child2>
</Component>
```

```javascript
function Component(props) {
  return <div>{props.children}</div>;
}
```
