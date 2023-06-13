"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Profile from "@components/Profile";


const MyProfile = () => { 

  const { data: session } = useSession();
  const [posts, setPosts] = useState("");

  useEffect(()=> {
      const fetchPosts = async () => {
        const response = await axios.get(`api/users/${session?.user.id}/posts`);
        const data =await response.json();
        setPosts(data)
      }
      if(session?.user.id) fetchPosts()
    },[])


    const handleEdit =() => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile
        name=""
        desc="Welcome to your personalized profile page..."
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile