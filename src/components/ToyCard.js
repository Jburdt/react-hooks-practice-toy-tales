import React from "react";

function ToyCard({toys, deleteFromDom, updateLikes}) {
const {id, likes} = toys
// const [toyLikes, setToyLikes] = useState({likes})

  const handleDelete = () => {
    

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(deleteFromDom(id))
  }

  const handleLikes = () => {

    const likedFormat = {
      likes: likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedFormat)
    })
    .then(r => r.json())
    .then(data => updateLikes(data))
  };


  return (
    <div className="card">
      <h2>{toys.name}</h2>
      <img
        src={toys.image}
        alt={"name your toy"}
        className="toy-avatar"
      />
      <p>{toys.likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
