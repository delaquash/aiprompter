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

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch=(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if( manufacturer === "" && model === "" ){
        return alert("Please fill in the search bar...")
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = ( model: string, manufacturer: string) => {

      /* `const searchParams = new URLSearchParams(window.location.search)` 
      is creating a new instance of the URLSearchParams object with the current 
      URL's query string as its input. This allows the code to manipulate the 
      query string parameters, such as adding or deleting them. */

      const searchParams = new URLSearchParams(window.location.search)
      

      if(model){
        searchParams.set('model', model);
      } else {
        searchParams.delete('model');
      }

      if(manufacturer){
        searchParams.set('manufacturer', manufacturer);
      } else {
        searchParams.delete('manufacturer');
      }

      /* `const newPathName = `${window.location.pathname} ? ${searchParams.toString()}`` is creating a
      new path name by combining the current path name with the updated query string parameters. The
      `window.location.pathname` returns the current path name, and `searchParams.toString()`
      returns the updated query string parameters as a string. The resulting string is then assigned
      to the `newPathName` variable, which is used to update the URL using the `router.push()`
      method. */
      const newPathName = `${window.location.pathname} ? ${searchParams.toString()}`
      router.push(newPathName)
  }
  return (
    <form onClick={handleSearch} className="searchbar">
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
          <input 
              type="text"
              placeholder="Model name or number..."
              value={model}
              onChange={(e)=>setModel(e.target.value)}
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