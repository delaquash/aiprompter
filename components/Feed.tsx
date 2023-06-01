"use client"

import { useState } from "react";
import PromptCard from "./PromptCard";


const Feed = () => {
  const [searchText, setSearchText] = useState()
  const handleFormChange =() => {

  }
  return (
    <section className="feed">
        <form  className="flex-center relative w-full">
          <input 
            value={searchText}
            onChange={handleFormChange}
            placeholder="Search for a tag or username"
            required
            className="search_input peer"
          
          />
        </form>
        <PromptCardList 
          data={[]}
          handleTagClick={()=>{}}
        />
    </section>
  )
}

export default Feed