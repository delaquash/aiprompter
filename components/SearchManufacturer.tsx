"use client"
import { Combobox, Transition } from "@headlessui/react";
import { ISearchbarProps } from "../types/index";
import Image from "next/image";
import { useState } from "react";
import { manufacturers } from "@constants";


const SearchManufacturer = ({ manufacturer, setManufacturer }: ISearchbarProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers = 
    query === " "
        ? manufacturers 
        : manufacturers.filter((item)=> (
          item.toLowerCase()
          /* `.replace(/\s+/g, "")` is a regular expression that is used to remove all whitespace
          characters (spaces, tabs, line breaks) from a string. The `g` flag is used to perform a
          global search, meaning it will replace all occurrences of whitespace characters in the
          string. */
          .replace(/\s+/g, "")
          /* `.includes(query.toLowerCase().replace(/\s+/g, ""))` is checking if the lowercase version
          of the current item in the `manufacturers` array (with all whitespace characters removed)
          includes the lowercase version of the `query` string (with all whitespace characters
          removed). This is used to filter the `manufacturers` array based on the user's input in
          the search bar. */
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      ))
  
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image 
                src="/car-logo.svg" 
                alt="car-logo" 
                height={20} 
                width={20} 
                className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input 
              className="search-manufacturer__input"
              placeholder="Volkswagen"
              displayValue={(manufacturer: string)=> manufacturer}
              onChange={(e)=> setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer