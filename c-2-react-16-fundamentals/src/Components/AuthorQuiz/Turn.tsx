import React from "react";
import Book from "./Book";

interface TurnProps {
   author: any,
   books: string[],
   highlight: string,
   onAnswerSelected: (answer: string) => void
}

const backgroundColorMapping : any = {
   'none': '',
   'correct': 'green',
   'wrong': 'red'
};

const Turn = (props : TurnProps) => {
   const backgroundColor : string = backgroundColorMapping[props.highlight];

   return (
      <div className="row turn" style={{backgroundColor: backgroundColor}}>
         <div className="col-12 col-md-4 offset-md-1">
            <img src={props.author.imageUrl} alt="Author" />
         </div>
         <div className="col-12 col-md-6">
            {props.books.map((title: string, index: number) => <Book key={index} title={title} onAnswerSelected={props.onAnswerSelected} />)}
         </div>
      </div>
   );
};

export default Turn;
