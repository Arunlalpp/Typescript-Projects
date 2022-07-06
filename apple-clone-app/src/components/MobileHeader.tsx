import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import appleLogo from "./Images/AppleLogo.svg";
import globalCart from "./Images/GlobalCart.svg";

function MobileHeader() {
	return (
		<div>
			<div className="bg-[#1d1d1f] w-full  lg:hidden block">
				<div className=" w-full pr-4  mx-auto max-w-[90rem] h-[48px] flex flex-row justify-between items-center lg:max-w-[980px] lg:p-[22px]">
					<button className="text-gray-500  inset-0">
						<Hamburger size={18} />
					</button>
					<div>
						<img className="opacity-50" src={appleLogo} alt="Apple-logo" />
					</div>
					<img src={globalCart} alt="Global-cart" />
				</div>
			</div>
		</div>
	);
}

export default MobileHeader;
