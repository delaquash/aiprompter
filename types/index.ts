import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType? : "button" | "submit";
}

export interface ISearchbarProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string)=> void;
}

export interface ICustomFilter {
    title: string;
    titles: (title: string) => void
}

export interface ICarData {
    city_mpg: number
    class: string
    combination_mpg: string
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number;
    make: string
    model: string
    transmission: string
    year: number
    message: string
}

export interface ICarCard {
     car: ICarData
}