"use client";
import Image from "next/image";
import { ICustomButtonProps } from "../types/index";

const CustomButton = ({ title, containerStyles, handleClick, btnType, rightIcon, textStyle }: ICustomButtonProps) => {
  return (
    <button
        className={`custom-btn ${containerStyles}`}
        disabled={false}
        onClick={handleClick}
        type={btnType || "button"}
    >
        <span className={`flex-1${textStyle}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative h-6 w-6">
            <Image src={rightIcon} alt="right icon" fill className="object-contain" />
          </div>
        )}
    </button>
  )
}

export default CustomButton;