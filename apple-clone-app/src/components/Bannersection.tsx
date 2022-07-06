import React from "react";
import Button from "./Shared/Button";

type BannerProps = {
	title: string;
	url: string;
	SubText: string;
	SeriesUrl: string;
	children: React.ReactNode;
};

function Bannersection({
	title,
	url,
	SubText,
	SeriesUrl,
	children,
}: BannerProps) {
	const style = {
		backgroundColor: "",
	};
	return (
		<div className="text-center bg-[#FBFBFD]" style={style}>
			<div className="text-black">
				<h2 className="lg:text-[56px] font-semibold  text-[32px]">{title}</h2>
				<div className="">{children}</div>
				<div className="flex flex-row justify-center">
					<img className="w-44" src={SeriesUrl} alt="" />
				</div>
				<h2 className="lg:text-[36px] text-[19px]">{SubText}</h2>
				<div className="flex flex-row justify-center">
					<Button ButtonText="Learn more" />
					<Button ButtonText="Buy" />
				</div>
				<div className="lg:h-[60vh] h-[50vh]">
					<img className="object-none  w-full h-full " src={url} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Bannersection;
