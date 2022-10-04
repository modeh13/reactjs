// eslint-disable-next-line no-unused-vars
import React, {BaseSyntheticEvent} from "react";
import { connect } from "react-redux";
import withRouter from "./WithRouter";

class AddAuthorForm extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         name: "",
         imageUrl: "",
         newBook: "",
         books: []
      }
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
      this.onAddBookClickHandler = this.onAddBookClickHandler.bind(this);
   }

   onSubmitHandler(evt: BaseSyntheticEvent) {
      evt.preventDefault();
      this.props.onAuthorAdded(this.state);
   }

   onFieldChangeHandler = (evt: BaseSyntheticEvent) => {
      this.setState({[evt.target.name]: evt.target.value});
   }

   onAddBookClickHandler() {
      if (this.state.newBook === "") return;
      this.setState((currentValue: any) => ({
         books: [...currentValue.books, this.state.newBook],
         newBook: ""
      }));
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
                        <div className="row">
                           <label htmlFor="newBook" className="form-label">Books</label>
                        </div>
                        <div className="input-group">
                           <input type="text" className="form-control" name="newBook" placeholder="Book title"
                                  value={this.state.newBook}
                                  onChange={this.onFieldChangeHandler}
                           />
                           <button type="button" className="btn btn-secondary" onClick={this.onAddBookClickHandler}>Add</button>
                        </div>
                     </div>
                     <div className="mb-3">
                        {this.state.books.map((bookTitle: string, index: number) => (<p key={index}>{bookTitle}</p>))}
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

const mapDispatchToProps = (dispatch: any, props: any) => {
   return {
      onAuthorAdded: (author: any) => {
         dispatch({type: "@type/authorAdded", author});
         props.router.navigate("/");
      }
   }
};

export default withRouter(connect(() => { return {}}, mapDispatchToProps)(AddAuthorForm));