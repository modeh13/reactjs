import React, {useState} from "react";

export default function LoginForm({onSubmit}) {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const isSubmitDisabled = login.username === "" || login.password === "";
  const onFieldChangeHandler = (evt) => {
    setLogin(prevState => ({...prevState, [evt.target.name]: evt.target.value}))
  };
  const onFormSubmitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(login.username, login.password);
  };

  return (
   <div>
     <form onSubmit={onFormSubmitHandler}>
       <div>
         <label htmlFor="username">Username</label>
         <input id="username-input" type="text" name="username"
          value={login.username} onChange={onFieldChangeHandler}
         />
       </div>
       <div>
         <label htmlFor="password">Password</label>
         <input id="password-input" type="password" name="password"
                value={login.password} onChange={onFieldChangeHandler}
         />
       </div>
       <button id="login-button" type="submit" disabled={isSubmitDisabled}>Login</button>
     </form>
   </div>
  )
}