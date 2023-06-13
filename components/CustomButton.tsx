"use client";
import Image from "next/image";
import { ICustomButtonProps } from "../types/index";

const CustomButton = ({ title, containerStyles, handleClick }: ICustomButtonProps) => {
  return (
    <button
        className={`custom-btn ${containerStyles}`}
        disabled={false}
        onClick={handleClick}
        type={"button"}
    >
        <span className={"flex-1"}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton;