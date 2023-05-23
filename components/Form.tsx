import { IPost } from '@app/create-prompt/page';
import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  type: string;
  post: IPost;
  setPost?: Dispatch<SetStateAction<string>>;
  submitting: boolean;
  handleSubmit?: React.MouseEventHandler
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
            
          >

          </form>
    </section>
  )
}

export default Form