import React from "react";

function Hello(props) {
   return <div>props.message</div>
}

describe('<Hello /> when setting up testing', () => {
   let componentResult = null;

   beforeAll(() => {
      componentResult = Hello({ message: 'Hello!' });
   });

   it('should pass', () => {
      expect(1 + 1).toBe(2);
   });

   it('should pass', () => {
      expect(componentResult).not.toBeNull();
   });

   it('is a DIV element', () => {
      expect(componentResult.type).toBe('div');
   });

   it('has children', () => {
      expect(componentResult.props.children).toBeTruthy();
   });
});
