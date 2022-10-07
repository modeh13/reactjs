# React 17 - Hooks

## Hooks
React Hooks have been introduced to facilitate developers to manage Component state, and to reuse functionality between Components.
_React Hooks only work in functional Components_

Most common React Hooks:
- useState
- useRef: Primarily used to allow access directly to an element in the DOM.
- useEffect

### useEffect
It's a function that can be used to emulate React Life Cycle Events on Class Components:

| Class Component      | Function Component                  |
|----------------------|-------------------------------------|
| componentDidMount    | useEffect(() => {})                 |
| componentDidUpdate   | useEffect(() => {})                 |
| componentWillUnmount | useEffect(() => { return () => {}}) |

**dependencies**: It refers to component states. Any change of dependencies values will trigger useEffect function.
```javascript
useEffect(() => {
  
}, [dependencies]);
```
**Passing down an empty array as second parameter of useEffect function. That will indicate to useEffect to be executed 
only when Component first rendered**
```javascript
useEffect(() => {
  
}, []);
```

### Module 3