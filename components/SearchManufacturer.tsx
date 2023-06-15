"use client"
import { Combobox, Transition } from "@headlessui/react";
import { ISearchbarProps } from "../types/index";
import Image from "next/image";
import { Fragment, useState } from "react";
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
      <Combobox value={manufacturer} onChange={setManufacturer}>
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

          {/* Input field for searching */}
          <Combobox.Input 
              className="search-manufacturer__input"
              placeholder="Volkswagen"
              displayValue={(manufacturer: string)=> manufacturer}
              onChange={(e)=> setQuery(e.target.value)}
          />

          {/* Dropdown menu with available options when clicking into the dropdown button*/}
          <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={()=> setQuery("")}
          >
              <Combobox.Options>
                    {filteredManufacturers.map((item)=> (
                      <Combobox.Option
                        key={item}
                        value={item}
                        className={({ active})=> `relative search-manufacturer__option
                        ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                      >
                        {({ selected, active })=> (
                          <>
                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                {item}
                            </span>
                            {selected ? (
                              <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}></span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
              </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer