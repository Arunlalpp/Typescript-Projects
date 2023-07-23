import React from "react";
type ButtonProps = {
	ButtonTitle: string;
};

function Button({ ButtonTitle }: ButtonProps) {
	let ButtonBackground = { backgroundColor: "" };

	return (
		<button
			type="button"
			className="px-8 bg-DarkGreen rounded-full text-Secondary font-Montetserrat font-semibold text-center py-1"
			style={ButtonBackground}
		>
			{ButtonTitle}
		</button>
	);
}

export default Button;
