import React from "react";
import ReactDOM from "react-dom/client";
import AuthorQuiz from "./Components/AuthorQuiz/AuthorQuiz";

const rootElement = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(<AuthorQuiz />);
