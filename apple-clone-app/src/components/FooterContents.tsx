import React from "react";
import { footerLinks } from "./Constants";

function FooterContents() {
	return (
		<div className="py-6 grid grid-cols-1 md:flex flex-row justify-between ">
			{footerLinks?.map((footerLink) => {
				return (
					<div className=" text-black">
						<div className="mb-[20px]">
							<span className="text-xs font-news font-bold">
								{footerLink.title}
							</span>
						</div>
						{footerLink?.contents?.map((content) => {
							return (
								<div
									className="text-[#878787] text-xs p-[1px]"
									key={content.text}
								>
									<button className="border-none  font-extralight">
										{content.text}
									</button>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default FooterContents;
