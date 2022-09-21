import React from "react";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthorQuiz from "./AuthorQuiz";
import AddAuthorForm from "./AddAuthorForm";

const App = () => {
   const onAuthorAddedHandler = (author: any) => {
     console.log(author);
   };

   return (
     <React.Fragment>
        <BrowserRouter>
           <NavBar />
           <main className="main-container">
              <Routes>
                 <Route path="/" element={<AuthorQuiz />} />
                 <Route path="/add" element={<AddAuthorForm onAuthorAdded={onAuthorAddedHandler} />} />
              </Routes>
           </main>
        </BrowserRouter>
     </React.Fragment>
   );
}

export default App;
