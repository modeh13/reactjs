import React from "react";
import { render } from "@testing-library/react";
import AuthorQuiz from "./AuthorQuiz";

describe('<AuthorQuiz />', () => {
   it('renders without crashing', () => {
      const authorQuizComponent = render(<AuthorQuiz />);
      
      expect(authorQuizComponent.container.textContent).not.toBeNull();
      expect(authorQuizComponent.container.textContent).toContain('Hello!');
   });
});
