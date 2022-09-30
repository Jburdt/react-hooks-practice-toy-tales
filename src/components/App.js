import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  // const [toyLikes, setToyLikes] = useState(toys.likes);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])

  if (!toys) {
    return <h2>Loading...</h2>
  }

  const addToy = (toy) => {
    setToys([...toys, toy])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const deleteFromDom = (id) => {
    const selected = toys.filter((toyObj) => toyObj.id !== id)
    setToys(selected)
  }

  const updateLikes = (toy) => {
    const mappedToys = toys.map((toyObj)=> {
      if (toyObj.id === toy.id){
        return toy
      } else {
        return toyObj
      }
    })
    setToys(mappedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm  addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} deleteFromDom={deleteFromDom} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
