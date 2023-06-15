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