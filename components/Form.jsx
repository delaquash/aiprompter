"use client";

import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';


const handleOnchange = (e) => {
  setPost({...post, prompt: e.target.value})
}

const Form = ({ type, post, setPost, submitting, handleSubmit } ) => {
  return (
    <>
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and share amazing prompts with the world, 
          and let your imagination run wild with any AI powered platform</p>
          <form
            onSubmit={handleSubmit}
            className='mt-10 w-full flex flex-col gap-7 glassmorphism max-w-2xl'
          >
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Your AI Prompt
               </span>
                <textarea 
                    value={post.prompt}
                    onChange={handleOnchange}
                    placeholder='Write Your Prompt Here...'
                    required
                    className=' form_textarea'
                />
            </label>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                  Tag
                  {` `}
                  <span className='font_normal'>
                    (#product, #webdev #flutter #mvp #nextjs)
                  </span>
                </span>
                  <textarea 
                      value={post.tag}
                      onChange={handleOnchange}
                      placeholder='#tag'
                      required
                      className='form_input'
                  />
            </label>
            <div className="flex-end mx-3 mb-5 gap-4">
              <Link href="/" className='text-gray-500 text-sm'>
                Cancel
              </Link>
              <button 
                type='submit' 
                disabled={submitting}
                className='px-5 py-1.5 text-sm rounded-full text-white bg-orange-400'
              >
                  {submitting ? `${type}...` : type}
              </button>
            </div>
          </form>
    </section>
    </>
  )
}

export default Form


