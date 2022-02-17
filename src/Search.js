import React from "react";
import './index.css';
function Search() {
  return (
    <>
    <div className="row my-5">
    <div className="col-10 ">
    <div class="mb-3 d-flex">
  
  <input type="email" className="form-control form-control1" id="exampleFormControlInput1" placeholder="Search Courses"/>
   <div>
  <button type="button" className="but1">Search</button>
  </div>
</div>
</div>
      {/* <div className="col-4 ">
          <button type="button" className="but1">Search</button>
      </div>  */}
      </div>
      
    </>
  );
}

export default Search;
