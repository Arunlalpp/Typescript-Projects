import React from "react";
import AppleLaptop from "./Images/AppleLaptop.png";
import AppleMobile from "./Images/AppleMobile.jpg";
import MackbookPro from "./Images/MackbookPro.jpg";
import AppleIpad from "./Images/AppleIpad.jpg";
import CartoonTab from "./Images/CartoonTab.jpg";
import IpadAir from "./Images/IpadAir.png";
import M2Logo1 from "./Images/M2Logo1.png";
import M2Logo2 from "./Images/M2Logo2.png";
import ManKind from "./Images/ManKind.jpg";
import AppleTv from "./Images/AppleTv.png";
import MankindWord from "./Images/Mankind.png";
import Mars from "./Images/Mars.png";
import Button from "./Shared/Button";
import CardContainer from "./CardContainer";

function CardProps() {
	return (
		<div className="grid lg:grid-cols-2 gap-3 grid-cols-1 px-3 py-3">
			<CardContainer
				url={AppleLaptop}
				TopText="MacBook Air"
				TitleUrl={M2Logo1}
				Detail="Order starting from 5.30 Pm IST on 8 july. Available starrting from 15 july."
				Title={""}
				TitleUrls={""}
				Action={<Button ButtonText={"Learn more"} />}
				Link={<Button ButtonText={"View pricing"} />}
				sup={""}
				AppleTv={""}
				ManKidWord={""}
				Mars={""}
			/>
			<CardContainer
				url={AppleMobile}
				TopText="iphone 13 Pro"
				Title="oh.So.Pro"
				Detail={""}
				TitleUrl={""}
				TitleUrls={""}
				Action={<Button ButtonText={"Learn more"} />}
				Link={<Button ButtonText={"Buy"} />}
				sup={""}
				AppleTv={""}
				ManKidWord={""}
				Mars={""}
			/>
			<CardContainer
				url={MackbookPro}
				TopText="Macbook Pro 13"
				TitleUrl={M2Logo2}
				Detail={""}
				Title={""}
				TitleUrls={""}
				Action={<Button ButtonText={"Learn more"} />}
				Link={<Button ButtonText={"Buy"} />}
				sup={""}
				AppleTv={""}
				ManKidWord={""}
				Mars={""}
			/>
			<CardContainer
				url={AppleIpad}
				TitleUrls={IpadAir}
				Title="Light.Bright.Full"
				Detail={""}
				TopText={""}
				TitleUrl={""}
				Action={<Button ButtonText={"Learn more"} />}
				Link={<Button ButtonText={"Buy"} />}
				sup={""}
				AppleTv={""}
				ManKidWord={""}
				Mars={""}
			/>
			<CardContainer
				url={CartoonTab}
				TopText="MacBook Air"
				Title="Cooking Mama: Cuisine"
				Detail={""}
				TitleUrl={""}
				TitleUrls={""}
				Action={<Button ButtonText={"Learn more"} />}
				Link={<Button ButtonText={"Try it free"} />}
				sup="2"
				AppleTv={""}
				ManKidWord={""}
				Mars={""}
			/>
			<CardContainer
				url={ManKind}
				Detail={""}
				TitleUrl={""}
				TitleUrls={""}
				Action={undefined}
				Link={undefined}
				TopText={""}
				Title={""}
				sup={""}
				AppleTv={AppleTv}
				ManKidWord={MankindWord}
				Mars={Mars}
			/>
		</div>
	);
}

export default CardProps;
