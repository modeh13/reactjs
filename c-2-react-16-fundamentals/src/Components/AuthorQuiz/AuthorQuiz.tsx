import React, {useState} from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import getAuthors from "./Data/Authors";
import {sample, shuffle} from "underscore";
import "../../assets/styles/authorQuiz.less";

function getTurnData() {
   const authors = getAuthors();
   const allBooks = authors.reduce((previousValue, currentValue) => previousValue.concat(currentValue.books), []);
   const fourRandomBooks = shuffle(allBooks).slice(0, 4);
   const answer = sample(fourRandomBooks);
   const author = authors.find(a => a.books.some(title => title === answer));

   return  {
      author: author,
      books: fourRandomBooks,
      highlight: ""
   }
}

const AuthorQuiz = () => {
   const [turnData, setTurnData] = useState(getTurnData());
   const answerSelectedHandler = (answer: string) => {
      const highlight = turnData.author.books.includes(answer) ? "correct" : "wrong";

      setTurnData(currentValue => ({ ...currentValue, highlight: highlight }));
   };

   return (
      <div id="app-main" className="container-fluid">
         <Hero />
         <Turn {...turnData} onAnswerSelected={answerSelectedHandler} />
         <Continue />
      </div>
   );
};

export default AuthorQuiz;
