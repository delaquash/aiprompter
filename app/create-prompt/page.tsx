"use client";
import Form from "@components/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export interface IPost {
  prompt: string;
  tag: string;
}

const CreatePrompt = () => {
  const router =  useRouter()
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<IPost>({
    prompt: "",
    tag: "",
  })

  const createPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true)
    try {
      const res = await axios.post('/api/prompt/new', {
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id
        })
      })
      if(res.ok){
        router.push("/")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
     <Form 
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </>
   
  )
}

export default CreatePrompt