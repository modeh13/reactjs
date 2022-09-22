import React from "react";

function Continue(props: any) {
   return (
      <div className="container-fluid mt-3">
         <div className="row">
            <div className="col-10 offset-1 d-grid gap-2 d-md-flex justify-content-md-end">
               <button type="button" className="btn btn-success" onClick={props.onContinue} >Continue</button>
            </div>
         </div>
      </div>
   );
}

export default Continue;
