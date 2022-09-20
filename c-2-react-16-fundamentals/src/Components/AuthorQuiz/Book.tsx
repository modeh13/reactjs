import React from "react";

// eslint-disable-next-line no-undef
interface BookProps {
   title: string,
   onAnswerSelected: (answer: string) => void
}

function Book(props: BookProps) {
   return (<div className="answer" onClick={() => props.onAnswerSelected(props.title)}>
      {props.title}
   </div>);
}

export default Book;
