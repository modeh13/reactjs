import React from "react";
import { connect } from "react-redux";
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import "../../assets/styles/authorQuiz.less";

const mapStateToProps = (state: any) => {
   return {
      highlight: state.highlight
   }
};
const mapDispatchToProps = () => { return {} };

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)((props: any) => {
   const showContinue = props.highlight === "correct";
   return (
      <div id="app-main" className="container-fluid">
         <Hero />
         <Turn />
         { showContinue && <Continue /> }
      </div>
   );
});

export default AuthorQuiz;
