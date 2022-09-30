import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys, deleteFromDom, updateLikes}) {

  return (
    <div id="toy-collection">{toys.map((toys) => <ToyCard updateLikes={updateLikes} setToys={setToys} toys={toys} key ={toys.id} deleteFromDom={deleteFromDom} />)}</div>
  );
}

export default ToyContainer;
