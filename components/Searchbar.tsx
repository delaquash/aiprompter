"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SearchManufacturer } from "./";


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

const Searchbar = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("")
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch=(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if( searchManufacturer === "" && searchModel === "" ){
        return alert("Please fill in the search bar...")
      }

      setModel(searchModel)
      setManufacturer(searchManufacturer)
  }

  
  return (
    <form onClick={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer 
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
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
          <input 
              type="text"
              placeholder="Model name or number..."
              value={searchModel}
              onChange={(e)=>setSearchModel(e.target.value)}
              name="model"
              className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default Searchbar;