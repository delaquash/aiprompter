"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";

const SearchButton = ({ otherClasses }: {otherClasses : string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
        src="/magnifying-glass.svg"
        alt="Magnifying glass"
        width={40}
        height={40}
        className="object-contain"
    />
  </button>
)
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
        <SearchButton  otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            alt="Model Icon"
            height={25}
            width={25}
            className="absolute w-[20px] h-[20px] ml-4"
          
          />
      </div>
    </form>
  )
}

export default Searchbar