import React from "react";

export default class CardForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         userName: ''
      };
   }

   onSubmitHandler = async (event) => {
      event.preventDefault();

      const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
      const profileData = await response.json();

      this.props.onSubmit(profileData);
      this.setState({ userName: '' });
   };

   onUserNameChangeHandler = (event) => {
      this.setState({ userName: event.target.value });
   };

   render() {
      return (
         <form onSubmit={this.onSubmitHandler}>
            <input type="text"
               name="userName"
               placeholder="GitHub username"
               value={this.state.userName}
               onChange={this.onUserNameChangeHandler}
               required />
            <button>Add Profile</button>
         </form>
      );
   }
}