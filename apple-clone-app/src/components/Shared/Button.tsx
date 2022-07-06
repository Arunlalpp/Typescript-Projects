import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
type ButtonProps = {
	ButtonText: string;
};

function Button({ ButtonText }: ButtonProps) {
    const style = {
			fontSize: "10px",
		};
		return (
			<span
				className="font-sans text-[#06c]  flex flex-row items-center"
				style={style}
			>
				<span>{ButtonText}</span>
				<MdOutlineKeyboardArrowRight className="text-[#06c]" />
			</span>
		);
}

export default Button;
