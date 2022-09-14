import React from "react";
import ReactDOM from "react-dom/client";
import AuthorQuiz from "./Components/AuthorQuiz/AuthorQuiz";
import {AuthorModel} from "./Common/Models/AuthorModel";

const rootElement = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const authors : Array<AuthorModel> = [
   {
      name: 'Mark Twain',
      imageUrl: 'assets/images/authors/mark-twain.svg',
      imageSource: 'Wikimedia Commons',
      books: [
         'The Adventures of Huckleberry Finn',
         'Life on the Mississippi',
         'Roughing It'
      ]
   }
];

// Load more authors
//
function getTurnData(authors: any) {
   // Get random data from authors
}

const authorQuizProps = {
   turnData: {
      author: authors[0],
      books: authors[0].books
   }
}

root.render(<AuthorQuiz {...authorQuizProps} />);
