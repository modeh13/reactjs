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
      console.log(turnData.author.books, answer)
      if (turnData.author.books.includes(answer)) {
         setTurnData(currentValue => ({ ...currentValue, highlight: "correct" }));
      }
      else {
         setTurnData(currentValue => ({ ...currentValue, highlight: "wrong" }));
      }
   };

   return (
      <React.Fragment>
         <NavBar />
         <div id="app-main" className="container-fluid" style={{paddingTop: '60px'}}>
            <Hero />
            <Turn {...turnData} onAnswerSelected={answerSelectedHandler} />
            <Continue />
         </div>
      </React.Fragment>
   );
};

export default AuthorQuiz;
