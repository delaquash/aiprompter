"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("")
  const handleSearch=() => {

  }
  return (
    <form onClick={handleSearch} className="searcbar">
      <div className="searchbar__item">
        <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default Searchbar