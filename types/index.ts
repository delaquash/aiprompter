import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    containerStyles?: string;
    rightIcon?: string;
    textStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType? : "button" | "submit";
    isDisabled?: boolean
}

export interface ISearchbarProps {
    selected: string;
    setSelected: (manufacturer: string)=> void;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface ICustomFilter {
    title: string;
    options: OptionProps[];
}


// Same name as carProps
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

export interface CarDetailsProps {
   isOpen: boolean;
   car: ICarData;
   closeModal: () => void 
}

export interface FilterProps{
    manufacturer: string;
    model: string;
    year: number;
    fuel: string;
    limit: number;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean
}