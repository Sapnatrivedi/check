import React from "react";
import {FcManager} from "react-icons/fc";
import {FaUserGraduate, FaRegComment} from "react-icons/fa";
function Card4(props) {
  return (
    <>

        <div className="col-lg-3 col-md-6">
          <div className="card h-100">
          <div className="row justify-content-center">
          <FcManager size="3rem"/>
          </div>
            <div className="card-body">
              <h6 className="card-title">{props.title}</h6>
              <p className="card-text">
               {props.para}
              </p>
              <div className="row">
                  <div className="col-lg-3 col-md-3 col"><FaUserGraduate size="1rem"/></div>
                  <div className="col-lg-3 col-md-3 col"><FaRegComment size="1rem"/></div>
                  <div className="col-lg-6 col-md-6 col text-center">
                      <button type="button" className="but3">$150</button>
                  </div>
              </div>
            </div>
          </div>
          </div>
       
    </>
  );
}

export default Card4;
