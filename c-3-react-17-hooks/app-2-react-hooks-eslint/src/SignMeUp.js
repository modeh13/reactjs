import React, {useState} from "react";

const SignMeUp = ({signMeUpCallback}) => {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <div>
        <div className="content">
          <input type="email" placeholder="Enter email" name="email"
            value={email}
            onChange={(evt) => { setEmail(evt.target.value) }} />
          <br />
          <button type="submit" className="btn"
            disabled={!email.includes("@")}
            onClick={() => {
              signMeUpCallback(email);
              setEmail("");
              alert("Sign up Confirmed!");
            }}>
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignMeUp;
