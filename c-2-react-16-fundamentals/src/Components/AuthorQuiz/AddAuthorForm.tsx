// eslint-disable-next-line no-unused-vars
import React, {BaseSyntheticEvent, SyntheticEvent} from "react";

export default class AddAuthorForm extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         name: "",
         imageUrl: ""
      }
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
   }

   onSubmitHandler(evt: BaseSyntheticEvent) {
      evt.preventDefault();
      this.props.onAuthorAdded(this.state);
   }

   onFieldChangeHandler = (evt: BaseSyntheticEvent) => {
      this.setState({[evt.target.name]: evt.target.value});
   }

   render() {
      return (
         <React.Fragment>
            <div className="container">
               <h1>Add Author Form</h1>
               <div className="row">
                  <form onSubmit={this.onSubmitHandler} className="col-12">
                     <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input className="form-control" type="text" name="name"
                               placeholder="Author name"
                               value={this.state.name}
                               onChange={this.onFieldChangeHandler}
                        />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Image Url</label>
                        <input className="form-control" type="text" name="imageUrl"
                               value={this.state.imageUrl}
                               placeholder="Image URL"
                               onChange={this.onFieldChangeHandler}
                        />
                     </div>
                     <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Save</button>
                     </div>
                  </form>
               </div>
            </div>
         </React.Fragment>
      );
   }
}
