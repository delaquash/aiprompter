"use client";
import Form from "@components/Form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface IPost {
  prompt: string;
  tag: string;
}

const CreatePrompt = () => {
  const router =  useRouter()
  const { data: session } = useSession()
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<IPost | any >({
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
          userId: session?.user?.id
        })
      })
      if(res.statusText === "OK"){
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

export default CreatePrompt;