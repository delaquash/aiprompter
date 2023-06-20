"use client"
import { Fragment, useState } from "react";
import { ICustomFilter } from "../types/index";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";


const CustomFilter = ({ title, options }: ICustomFilter) => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="w-fit">
      <Listbox
          value={selected}
          onChange={(e)=> setSelected(e)}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
              <span className="block truncate">{selected.title}</span>
              <Image 
                  src="/chevron-up-down.svg" 
                  height={20} 
                  width={20} 
                  className="ml-4 object-contain"
                  alt="Chevron Up Down" 
              />
          </Listbox.Button>
          <Transition
              as={Fragment}
              
          >

          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter