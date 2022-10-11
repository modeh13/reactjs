import React from "react";
import SignMeUp from "./SignMeUp";

export const Header = () => {
  const signUpCallback = (email) => {
    console.log("Email: ", email);
  };

  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 19-20 2019</h6>
          <h6 className="text-uppercase" >San Jose, California</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-end">
          <div>
            <img src="/static/SVCClogo.png" alt="Logo" />
          </div>
          <h2>Silicon Valley Code Camp</h2>
          <div className="row col-12 text-lg-end">
            <SignMeUp signUpCallback={signUpCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
