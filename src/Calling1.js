import React from "react";

import Card6 from "./Card6";

import Sdata1 from "./Sdata1";
function Calling1() {
  return (
    <>
    <div className="container">
    
      <div className="row row-cols-1 row-cols-md-3 g-1">
       
            {
                Sdata1.map((val, ind) =>{
                    return <Card6 icon={val.icon} tie={val.tie} para1={val.para1}/>
                })
            }
            
        
      </div>
    </div>
    
    </>
  );
}

export default Calling1;
