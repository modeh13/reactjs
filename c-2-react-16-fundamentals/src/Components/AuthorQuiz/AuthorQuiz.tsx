import React from "react";
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import Footer from "./Footer";
import {TurnDataModel} from "./../../Common/Models/TurnDataModel";

interface AuthorQuizProps {
   turnData: TurnDataModel
}

const AuthorQuiz = (props: AuthorQuizProps) => {
   return (
      <div className="container-fluid"> 
         <Hero />
         <Turn {...props.turnData} />
         <Continue />
         <Footer />
      </div>
   );
};

export default AuthorQuiz;
