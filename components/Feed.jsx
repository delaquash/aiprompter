"use client"
import { useEffect, useState } from "react";
// import PromptCardList from "./PromptCardList";
import axios from "axios";



const Feed = () => {
  const [searchText, setSearchText] = useState();
  const [post, setPost] = useState([])
  const handleFormChange =() => {

  }


  useEffect(()=> {
    const fetchPosts = async () => {
      const response = await axios("api/prompt");
      const data = response.json();
      setPost(data)
    }
    fetchPosts()
  },[])

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
          data={[post]}
          handleTagClick={()=>{}}
        />
    </section>
  )
}

export default Feed