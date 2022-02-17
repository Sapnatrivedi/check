import React from "react";
import Card4 from "./Card4";
import Sdata  from "./Sdata";

function Callingcard() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-1">
       
            {
                Sdata.map((val, ind) =>{
                    return <Card4 title={val.title} para={val.para}/>
                })
            }
            
        
      </div>
    </div>
  );
}

export default Callingcard;
