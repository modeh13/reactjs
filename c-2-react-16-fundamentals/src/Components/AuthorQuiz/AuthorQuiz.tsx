import React, {useState} from "react";
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import {sample, shuffle} from "underscore";
import "../../assets/styles/authorQuiz.less";

function getTurnData(authors: any[]) {
   const allBooks = authors.reduce((previousValue, currentValue) => previousValue.concat(currentValue.books), []);
   const fourRandomBooks = shuffle(allBooks).slice(0, 4);
   const answer = sample(fourRandomBooks);
   const author = authors.find(a => a.books.some((title: string) => title === answer));

   return  {
      author: author,
      books: fourRandomBooks,
      highlight: ""
   }
}

const AuthorQuiz = (props: any) => {
   const [turnData, setTurnData] = useState(getTurnData(props.authors));
   const answerSelectedHandler = (answer: string) => {
      const highlight = turnData.author.books.includes(answer) ? "correct" : "wrong";

      setTurnData(currentValue => ({ ...currentValue, highlight: highlight }));
   };

   const showContinue = turnData.highlight === "correct";
   const onContinueHandler = () => {
      setTurnData(getTurnData(props.authors));
   };

   return (
      <div id="app-main" className="container-fluid">
         <Hero />
         <Turn {...turnData} onAnswerSelected={answerSelectedHandler} />
         { showContinue && <Continue showContinue={showContinue} onContinue={onContinueHandler} /> }
      </div>
   );
};

export default AuthorQuiz;
