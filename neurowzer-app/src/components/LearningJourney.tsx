import React from "react";
import Button from "./Button";
type CardProps = {
	CardTitle: string;
	SubTitle: string;
	Subtext: string;
};

function LearningJourney({ CardTitle, SubTitle, Subtext }: CardProps) {
	return (
		<div>
			<div className="bg-Primary px-4 mx-auto">
				<div className="flex flex-col">
					<div className="flex flex-row justify-between">
						<span>Arun</span>
						<span>Lal</span>
					</div>
					<div className="text-center">
						<span>A learning journey</span>
					</div>
				</div>
				<div className="bg-Secondary rounded-xl w-[328px] h-[494px] shadow-md mx-auto m-32">
					<div className="w-[239px] h-[224px] relative top-[-20%] mx-auto">
						<img
							className="rounded-xl w-full h-full"
							src="https://images.unsplash.com/photo-1657215374010-786fefd1dbbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>

						<div className=" w-[280px] h-[230.96px] mx-auto">
							<h1 className="text-primary leading-[24px] text-DarkBlack font-semibold py-3">
								{CardTitle}
							</h1>
							<p className="text-secondary text-GrayBlack leading-[24px] font-normal">
								<p className="pb-3 italic">{SubTitle}</p>
								<p>{Subtext}</p>
							</p>
						</div>

						<div className="flex flex-row justify-center mt-16">
							<Button ButtonTitle="Start Journey" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LearningJourney;
