import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem(e) {
    e.preventDefault();

    const newStuff = {
      name: name,
      price: Number(price),
    };

    onAddStuff(newStuff);

    setName("");
    setPrice("");
  }

  return (
    <form className="stuff-form" onSubmit={addItem}>
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="search"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button>Add Stuff</button>
    </form>
  );
}