import React from "react";
type MankindProps = {
	url: string;
	TopText: string;
	Title: string;
	Detail: string;
	TitleUrl: string;
	TitleUrls: string;
	Action: React.ReactNode;
	Link: React.ReactNode;
	sup: string;
	AppleTv: string;
	Mankidword: string;
	Mars: string;
};

function CardContainer({
	url,
	TopText,
	Title,
	Detail,
	TitleUrl,
	TitleUrls,
	Action,
	Link,
	sup,
	AppleTv,
	Mankidword,
	Mars,
}: MankindProps) {
	return (
		<div>
			<div
				className="BannerImage flex flex-col gap-0 bg-[#fbfbfd]"
				style={{ backgroundImage: "url(" + url + ")" }}
			>
				<div className="text-center mt-8">
					<h1 className="font-sans text-[40px] font-semibold">{TopText}</h1>
					<div className="flex flex-row justify-center">
						<img className="w-48" src={TitleUrls} alt="" />
					</div>

					<h2 className="text-white text-2xl">{Title}</h2>
					<div className="flex flex-row justify-center">
						<img className="w-48" src={TitleUrl} alt="" />
					</div>
					<span className="text-[#878787]">{Detail}</span>
					<div className="flex flex-row gap-4 justify-center">
						<button>{Action}</button>
						<button className="flex flex-row items-center">
							{Link}
							<sup className="text-blue-600">{sup}</sup>
						</button>
					</div>
				</div>
				<div className="">
					<div className="flex flex-row justify-center">
						<img className="w-24 mt-8" src={AppleTv} alt="" />
					</div>
					<div className="">
						<img className="w-[350px]" src={Mankidword} alt="" />
						<img className="text" src={Mars} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardContainer;
