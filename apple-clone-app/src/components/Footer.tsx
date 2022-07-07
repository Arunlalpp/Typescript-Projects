import React from "react";
import FooterContents from "./FooterContents";

function Footer() {
	return (
		<div className="w-full bg-[#F5F5F7]">
			<div className="max-w-[980px] mx-auto px-2">
				<section className="border-b-[1px] border-[#878787] pt-3 text-[#878787]">
					<ul className="text-xs leading-5">
						<li>
							‡Instant cashback of 5% of order value is available for qualifying
							HDFC Bank Credit Cards & HDFC Credit Card EMI only. Offer is
							limited to Maximum Instant Cashback Amount of ₹6000 per successful
							single order of ₹54900 and above. Instant cashback is available
							for up to two orders per 90-day period with an eligible card. Any
							additional orders may be cancelled. Card eligibility is subject to
							terms and conditions between you and your card-issuing bank. Total
							transaction value is calculated after any trade-in credit or
							eligible discount is applied. Any subsequent order adjustment(s)
							or cancellation(s) may result in instant cashback being
							recalculated, and any refund may be adjusted to account for
							instant cashback reclaim, which may result in no refund being made
							to you. Offer may be revised or withdrawn at any time without any
							prior notice.
						</li>
						<ol className="list-decimal mt-2 ml-3">
							<li>
								Qualified purchasers can receive promotion savings when they
								purchase an eligible Mac or eligible iPad with eligible AirPods
								at a qualifying location. Only one pair of AirPods per eligible
								Mac or eligible iPad per qualified purchaser. Offer is subject
								to availability. Subject to terms and conditions{" "}
							</li>
							<li className="mt-3">
								₹99/month after free trial. Only one offer per Apple ID and only
								one offer per family if you’re part of a Family Sharing group,
								regardless of the number of devices you or your family
								purchases. Offer is valid for 3 months after eligible device
								activation. Plan automatically renews until cancelled.
								Restrictions and other{" "}
							</li>
						</ol>
						<ul className="mt-2">
							<li>
								₹99/month after free trial. Only one offer per Apple ID and only
								one offer per family if you’re part of a Family Sharing group,
								regardless of the number of devices you or your family
								purchases. This offer is not available if you or your Family
								have previously accepted an Apple TV+ 1-year-free offer. Offer
								is valid for 3 months after eligible device activation. Plan
								automatically renews until cancelled. Restrictions and other
							</li>
						</ul>
					</ul>
				</section>
				<FooterContents />
				<div className="border-b-[1px] border-[#878787]">
					<div className="">
						<h1 className="text-xs text-[#878787]">
							More ways to shop:
							<span className="text-blue-400 text-sm">
								Find a retailler
							</span>{" "}
							near you. Or call 000800 0401966.
						</h1>
					</div>
				</div>
				<div className="flex flex-row justify-between gap-4 text-[#878787]">
					<div className="flex flex-row items-center">
						<p className="text-xs">
							Copyright © 2022 Apple Inc. All rights reserved.
						</p>
						<span className="text-xs pr-2 pl-2">Privacy Policy |</span>
						<span className="text-xs pr-2">Privacy Policy |</span>
						<span className="text-xs pr-2">Privacy Policy |</span>
						<span className="text-xs pr-2">Privacy Policy |</span>
						<span className="text-xs pr-2">Privacy Policy </span>
					</div>
					<div className="">
						<span className="text-xs">India</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
