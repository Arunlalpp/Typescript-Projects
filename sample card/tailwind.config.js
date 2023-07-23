module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundcolor: {
				lineargradient:
					"linear-gradient(3.56deg, rgba(255, 255, 255, 0.5) 3.68%, rgba(244, 238, 209, 0.5) 80.51%);",
			},
		},

		fontsize: {
			primary: "20px",
			secondary: "14px",
		},
		fontstyle: {
			italic: "italic",
		},
		Fontfamily: {
			Montetserrat: "Monteserrate",
		},
		colors: {
			Primary: "#faf6e8",
			Secondary: "#FFFFFF",
			DarkBlack: "#000000",
			GrayBlack: "#2F2F2D",
			DarkGreen: "#225D2E",
		},
		buttonwidth: {
			width: "236px",
			height: "51px",
		},
		boxshadow: {
			shadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
		},
		border: {
			border: "4px 4px 0px 0px",
		},
	},
	plugins: [],
};
