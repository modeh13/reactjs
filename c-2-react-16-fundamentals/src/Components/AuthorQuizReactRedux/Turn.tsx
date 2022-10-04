import React from "react";
import Book from "./Book";
import {connect} from "react-redux";

// eslint-disable-next-line no-undef
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

const mapStateToProps = (state: any) => {
   return {
      highlight: state.highlight,
      author: state.turnData.author,
      books: state.turnData.books
   }
};
const mapDispatchToProps = (dispatch: any) => {
   return {
      onAnswerSelected: (answer: string) => {
         dispatch({type: "@type/answerSelected", answer});
      }
   }
};

const Turn = connect(mapStateToProps, mapDispatchToProps)((props : TurnProps) => {
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
});

export default Turn;
