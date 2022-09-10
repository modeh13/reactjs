import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "@testing-library/react";
import Sum from "./Sum";
import { act } from "react-dom/test-utils";

describe('<Sum/> using ReactDOM', () => {
   it('renders without crashing', () => {
      const div = document.createElement('div');
      const root = ReactDOM.createRoot(div);
      const props = {a: 5, b: 5};
      act(() => {
         root.render(<Sum {...props} />);
      });      
   });

   it('renders without crashing', () => {      
      const props = {a: 5, b: 5};
      
      render(<Sum {...props} />);
   });
});
