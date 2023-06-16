"use client";
import React from 'react';
import { ICarCard } from "../types/index";
import CustomButton from './CustomButton';
import { calculateCarRent } from '@utils';



const CarCard = ({ car }: ICarCard) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  /* `const carRent = calculateCarRent(city_mpg, year);` 
  is calculating the estimated car rent based on
  the city miles per gallon (city_mpg) and the year of the car.
   The `calculateCarRent` function is
  imported from the `utils` module and takes these two parameters 
  to calculate the estimated rent.
  The result is stored in the `carRent` constant. */

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold' >
        <span className='self-start font-semibold text-[14px]'>
          &#8358;
        </span>
        {carRent}00
        <span className='self-end font-medium text-[14px]'>
          /day
        </span>
      </p>
    </div>
  )
}

export default CarCard