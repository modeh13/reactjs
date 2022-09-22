import React from "react";
import { useNavigate } from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import AuthorQuiz from "./AuthorQuiz";
import AddAuthorForm from "./AddAuthorForm";
import getAuthors from "./Data/Authors";

const authors = getAuthors();

const AppRouter = () => {
   const navigate = useNavigate();
   const onAuthorAddedHandler = (author: any) => {
      authors.push(author);
      navigate("/");
   };

   return (
     <React.Fragment>
        <NavBar />
        <main className="main-container">
           <Routes>
              <Route path="/" element={<AuthorQuiz authors={authors} />} />
              <Route path="/add" element={<AddAuthorForm onAuthorAdded={onAuthorAddedHandler} />} />
           </Routes>
        </main>
     </React.Fragment>
   );
}

const App = () => {
   return (
      <BrowserRouter>
         <AppRouter />
      </BrowserRouter>
   )
}

export default App;
