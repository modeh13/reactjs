import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import AuthorQuiz from "./AuthorQuiz";
import AddAuthorForm from "./AddAuthorForm";
import getAuthors from "./Data/Authors";
import {sample, shuffle} from "underscore";

function getTurnData(authors: any[]) {
   const allBooks = authors.reduce((previousValue, currentValue) => previousValue.concat(currentValue.books), []);
   const fourRandomBooks = shuffle(allBooks).slice(0, 4);
   const answer = sample(fourRandomBooks);
   const author = authors.find(a => a.books.some((title: string) => title === answer));

   return  {
      author: author,
      books: fourRandomBooks
   }
}

const App = () => {
   const authors = getAuthors();
   const reducer = (state: any = {}, action: any) => {
      switch (action.type) {
         case "@type/answerSelected": {
            const highlight = state.turnData.author.books.includes(action.answer) ? "correct" : "wrong";
            return Object.assign({}, state, { highlight: highlight});
         }
         case "@type/continue": {
            return Object.assign({}, state, { turnData: getTurnData(state.authors), highlight: ""});
         }
         case "@type/authorAdded": {
            return Object.assign({}, state, { authors: authors.concat(action.author)});
         }
         default: {
            return state;
         }
      }
   };
   const store = createStore(reducer, {
      authors,
      turnData: getTurnData(authors),
      highlight: ""
   });

   return (
      <Provider store={store}>
         <BrowserRouter>
            <NavBar />
            <main className="main-container">
               <Routes>
                  <Route path="/" element={<AuthorQuiz />} />
                  <Route path="/add" element={<AddAuthorForm />} />
               </Routes>
            </main>
         </BrowserRouter>
      </Provider>
   )
}

export default App;
