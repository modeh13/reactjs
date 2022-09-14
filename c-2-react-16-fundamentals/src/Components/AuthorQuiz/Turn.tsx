import React from "react";
import Book from "./Book";
import {TurnDataModel} from "./../../Common/Models/TurnDataModel";

const backgroundColorMapping = {
   'none': '',
   'correct': 'green',
   'wrong': 'red'
};

const Turn = ({author, books} : TurnDataModel) => {
   // Add highlight parameter
   // backgrounColorMapping[highlight]   

   return (<div className="row turn" style={{backgroundColor: 'white'}}>
      <div className="col-4 offset-1">
         <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
         {books.map((title: string, index: number) => <Book key={index} title={title}/>)}
      </div>
   </div>);
};

export default Turn;