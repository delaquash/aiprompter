"use client";
import React from 'react';
import { ICarCard } from "../types/index";
import CustomButton from './CustomButton';


const CarCard = ({ car }: ICarCard) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
      </div>
    </div>
  )
}

export default CarCard