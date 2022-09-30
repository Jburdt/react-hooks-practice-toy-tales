import React, { useState } from "react";

function ToyForm({addToy}) {

  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')

  const handleToyName = (e) => {
    e.preventDefault()
    setToyName(e.target.value)
  }

  const handleToyImage = (e) => {
    e.preventDefault()
    setToyImage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const toyData = {
      name: toyName,
      image: toyImage,
      likes: 0
    }
  
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(toyData)
    })
    .then(r => r.json())
    .then(addToy)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange={handleToyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
        />
        <br />
        <input onChange={handleToyImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
