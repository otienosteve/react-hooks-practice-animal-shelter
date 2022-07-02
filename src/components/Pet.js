import React,{useState} from "react";

function Pet({id,
type,
gender,
age,
weight,
name,
isAdopted}) {
  const[adopt,setAdopt]=useState(isAdopted)
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender}
         - {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
      { adopt? <button className="ui disabled button">Already adopted</button>
       : <button className="ui primary button" onClick={()=>setAdopt(!adopt)}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
