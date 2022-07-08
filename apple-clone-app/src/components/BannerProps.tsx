import React from "react";
import Bannersection from "./Bannersection";
import Button from "./Shared/Button";
import bannerImage from "./Images/Bannerimage.jpg";
import WatchLogo from "./Images/WatchLogo.png";
import AppleWatch from "./Images/Applewatch.jpg";
import SuperCharged from "./Images/SuperCharged.jpg";

function BannerProps() {
	return (
		<>
			<div className="bg-[#fbfbfd] py-3 text-center">
				<span className="text-sm flex lg:flex-row justify-center items-center flex-col max-w-[85%] mx-auto">
					Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit
					cards on orders over ₹54900.
					<div className="text-sm">
						<Button ButtonText="Learn more" />
					</div>
				</span>
			</div>
			<Bannersection
				url={bannerImage}
				title="iphone 13"
				SubText="Your new superpower"
				SeriesUrl={""}
				children={""}
			/>
			<Bannersection
				url={AppleWatch}
				SeriesUrl={WatchLogo}
				SubText="It’s our largest display yet."
				title={""}
				children={""}
			/>
			<Bannersection
				url={SuperCharged}
				SeriesUrl={""}
				SubText="Save on Mac or iPad. Plus get AirPods."
				title={""}
			>
				<div className="text-[56px] text-black font-sans font-extrabold">
					<span>
						Get <span className="text-[#ca2166]">supercharged</span> for
						university
					</span>
				</div>
			</Bannersection>
		</>
	);
}

export default BannerProps;
