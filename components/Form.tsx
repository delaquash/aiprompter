import { IPost } from '@app/create-prompt/page';
import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  type: string;
  post: IPost;
  setPost?: Dispatch<SetStateAction<string>>;
  submitting: boolean;
  handleSubmit?: React.MouseEventHandler
}

const handleOnchange = (e: { target: { value: string; }}) => {
  setPost({...post, prompt: e.target.value})
}

const Form = ({ type, post, setPost, submitting, handleSubmit }: IProps) => {
  return (
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
                    className='form_input'
                />
            </label>
          
          </form>
    </section>
  )
}

export default Form

// function setPost(arg0: any) {
//   throw new Error('Function not implemented.');
// }
