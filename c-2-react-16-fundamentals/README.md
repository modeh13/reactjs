# C-2 React 16 Fundamentals

## Configuring React app to support Typescript

```batch
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

```batch
npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
```

```batct
npm i -D jest babel-jest react-test-renderer
```

```batch
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
```

## Props validations

### Using prop-types

React includes a package named 'prop-types'. It offers a manner to validate **props** at runtime.
It has different helpers to validate properties.

```javascript
const Component = (props) => {
  // ...
};

Component.propTypes = {
  a: PropTypes.number.isRequired,
};
```

### Using Typescript interfaces

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
   <Child1 />
   <Child2 />
</Component>
```

```javascript
function Component(props) {
  return <div>{props.children}</div>;
}
```

## Events

DOM events are defined by each Browser. Browsers have similar events on their way. To not worry about each specific event by Browser.
React exposes its own version of events named _Synthetic Events_. It's an implementation that abstracts DOM events definitions.
A **synthetic event object** is passed down to the Handler.

```javascript
const clickHandler = (synthEvent) => {
  console.log(synthEvent);
};
```

## Forms

React does not provide a built-in implementation for validating Forms, so you can develop your own solution if you want to have more control.
In case, you do not care about on how Form is validated. You can use a npm package. There is a popular one called _React JSON Schema Form_.
When an HTML Form input element is defined within a React Component. Its value needs to be treated by an event handler which will have to update
the component state.

## React Routing

Client-Side routing. It is achieved by **React Router**. It allows to render components, and refreshing app content without sending a request to the Server.
It has some disadvantages, but it's suitable when Page does not need to be searchable. This approach most likely implements **pushState** to update
Browser URL, and detect any change on it.

```jsx
// It does support parameters
<BrowserRouter>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/about" component={About} />
    <Route path="/single:id" component={Single} />
</BrowserRouter>

function Single({match}) {
    return <div>{match.params.id}</div>
}
```

Server-Side routing. It implies to completely render Components from a Server-Side application. It usually takes NodeJs characteristics to expose
a server that is responsible to process each URL request.

## Refs

It's the way of accessing DOM elements. Ref elements must be accessible from **componentDidMount** since it's only until Component is rendered
where DOM elements are available.

```jsx
class Component {
  constructor(){
    this.myDiv = React.createRef();
  } 
  
  render() {
    return (<div ref={this.myDiv}></div>);
  }
}
```

## State

### MVI - Model-View-Intent

Model stores Component state. 
View describes UI based on Model.
Intent refers to User "intentions" or actions tha may affect or update the state.

### Custom State Container
````typescript
const container = createContainer(reducer, state);
const createContainer = (reducer, initialState = {}) => {
   return {
      getState: () => state,
      dispatch: (action) => {
         state = reducer(state, action);
      },
      subscribe: () => handler.forEach(handler => handler())
   }
}
````

### Redux

````typescript
const store = Redux.createStore(reducer, state);
store.getState();
store.subscribe(() => { });

const action = {
   type: '@actionType',
   // Other properties
};

store.dispatch(action);
````

### React-Redux

- Provider: It's a React-Redux component that wraps other components as children. Children components will have access to store and state.
- connect: It's a function that receives two functions. It returns other function that expects as argument a React Component.
    - mapStateToProps: It's a function from Redux to set props to a Component. It takes care of getting data from store to Component.
    - mapDispatchToProps: It's also a function from Redux that takes care of sending/exposing actions from Component to store.
    in summary. This function provides a way to map Component's events to actions for Redux store.
    It sends throughout Component **props** a way to dispatch actions. 

## GR - 6. Forms - Adding a Form to the Author 10:00
