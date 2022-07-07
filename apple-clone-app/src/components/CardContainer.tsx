import React from "react";
import Button from "./Shared/Button";
type MankindProps = {
	url: string;
};

function CardContainer({ url }: MankindProps) {
	return (
		<div className="">
			<div className="relative z-[-10]">
				<img src={url} alt="" />

				<div className="absolute top-[20%] left-[40%] text-center ">
					<h1>MacBoook Air</h1>
					<span>
						Supercharged By
						<img src="" alt="" />
					</span>
					<p>kjgfrivweriwhefkjwbdigrebb vciwuedgfubksdc ng</p>
					<div className="flex flex-row gap-4 justify-center">
						<Button ButtonText="Learn more" />
						<Button ButtonText="View pricing" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardContainer;
