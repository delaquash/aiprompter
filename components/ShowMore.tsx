"use client";
import { ShowMoreProps } from '@types';
import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from './CustomButton';

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()
    
    const handlePagination =() => {
        console.log("Welcome");
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {isNext && (
            <CustomButton
                title="Show More" 
                containerStyles="rounded-full bg-primary-blue text-white" 
                handleClick={handlePagination}
                btnType="button"
            />
        )}
    </div>
  )
}

export default ShowMore