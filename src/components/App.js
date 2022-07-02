import React, { useState,useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  useEffect(()=>{
    fetch('  http://localhost:3002/pets')
    .then(res=>res.json())
    .then(data=>setPets(data))
  },[])
  function onChangeType(type){
    const newPets=pets.filter(pet=>pet.type===type)
    setPets(newPets)
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} filters={filters} setFilters={setFilters}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
