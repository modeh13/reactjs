import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         profiles: []
      };
   }

   onCardFormSubmitHandler = (profileData) => {
      console.log(profileData);
      this.setState(prevState => {
         return { profiles: [...prevState.profiles, profileData] }
      });
   }

   render() {
      return (
         <div>
            <div className="header">{this.props.title}</div>
            <CardForm onSubmit={this.onCardFormSubmitHandler} />
            <CardList profiles={this.state.profiles} />
         </div>
      );
   }
}
