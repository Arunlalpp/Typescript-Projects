import React from "react";

type Buttonprops = {
	buttonText: string;
};
const STYLE = ["btn--primary--solid", "btn--danger--solid"];
const SIZE = ["btn--medium", "btn--small"];

function ButtonStyle({ buttonText }: Buttonprops) {
	const checkButtonStyle = STYLE.includes(buttonSture) ? buttonSture : STYLE[0];
	const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
			{buttonText}
		</button>
	);
}

export default ButtonStyle;
