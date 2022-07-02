import React from "react";

function Filters({onChangeType,filterPet,filters,setFilters}) {
const handleChange=(val)=>{
  setFilters(val)
}
function handleFindPet(){
onChangeType(filters)
}
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={(e)=>handleChange(e.target.value)} value={filters.type}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleFindPet}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
