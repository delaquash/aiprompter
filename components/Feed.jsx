"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import PromptCard from "./PromptCard";
import { Session } from "inspector";

const PromptCardList = ({ data, handleTagClick}) => {
  return (
    <div className="m-16 prompt_layout">
        {data.map((post)=> {
          <PromptCard 
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
          />
        })}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState();
  const [post, setPost] = useState([])
  const handleFormChange =() => {

  }

  useEffect(()=> {
    const fetchPosts = async () => {
      const response = await axios("api/prompt");
      const data = await response.json();
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
          datas={post}
          handleTagClick={()=>{}}
        />
    </section>
  )
}

export default Feed