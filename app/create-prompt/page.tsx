"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export interface IPost {
  prompt: string;
  tag: string;
}

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<IPost>({
    prompt: "",
    tag: "",
  })

  const createPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt