import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity (e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target[0].value = "";
    }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        //value={city}
        //onChange={e => setCity(e.target.value)}
        onChange={(e) => handleInputChange(e)}
      />
      <input className="agrega" type="submit" value="Agregar" />
    </form>
  );
}

