import React from "react";
import Button from "./Button";

type bannerProps = {
	url: string;
};

function SelfHelp({ url }: bannerProps) {
	return (
		<div className="bg-Primary px-4 ">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row justify-between gap-4">
					<span>Lal</span>
					<div className="flex flex-col">
						<h1 className="font-semibold">Self Help</h1>
						<h2>your Self-care is our priority</h2>
					</div>
				</div>
				<div className="">
					<span>Arun</span>
				</div>
			</div>
			<div className="bg-Secondary rounded-xl  mx-auto shadow-md mt-5">
				<div
					className="BannerImage rounded-xl  py-8 px-8"
					style={{ backgroundImage: "url(" + url + ")" }}
				>
					<div className="">
						<h1 className="w-[157px] h-[48px] font-semibold text-[16px] leading-6">
							Daily does of
							<br />
							Wellness Trivia
						</h1>
						<p className="w-[155px] h-[32px] text-[10px] font-normal leading-4">
							Find Daily Puzzle, Quize Facts and more.
						</p>
					</div>
					<div className="mt-5">
						<Button ButtonTitle="Start" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelfHelp;
