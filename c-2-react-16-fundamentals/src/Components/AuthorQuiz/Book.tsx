import React from "react";

interface BookProps {
   title: string
}

function Book(props: BookProps) {
   return (<div className="answer">
      {props.title}
   </div>);
}

export default Book;
