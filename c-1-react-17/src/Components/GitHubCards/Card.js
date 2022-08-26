import React from "react";

export default class Card extends React.Component {
   render() {
      return (
         <div className="github-profile" style={{ margin: '1rem' }}>
            <img src={this.props.avatar_url} />
            <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
               <div className="name" style={{ fontSize: '125%' }}>{this.props.name}</div>
               <div className="company">{this.props.company}</div>
            </div>
         </div>
      );
   }
}