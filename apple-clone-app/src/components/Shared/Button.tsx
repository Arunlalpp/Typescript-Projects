import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
type ButtonProps = {
	ButtonText: string;
};

function Button({ ButtonText }: ButtonProps) {
	return (
		<span className="font-sans text-[#06c] text-xl flex flex-row items-center">
			<span>{ButtonText}</span>
			<MdOutlineKeyboardArrowRight className="text-[#06c]" />
		</span>
	);
}

export default Button;
