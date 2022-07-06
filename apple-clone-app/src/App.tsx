import './App.css';
import MobileHeader from "./components/MobileHeader";
import Navlinks from "./components/Navlinks";
import Bannersection from "./components/Bannersection";
import bannerImage from "./components/Images/Bannerimage.jpg";
import WatchLogo from "./components/Images/WatchLogo.png";
import AppleWatch from "./components/Images/Applewatch.jpg";
import SuperCharged from "./components/Images/SuperCharged.jpg";
import AppleLaptop from "./components/Images/AppleLaptop.png";
import AppleMobile from "./components/Images/AppleMobile.jpg";
import MackbookPro from "./components/Images/MackbookPro.jpg";
import AppleIpad from "./components/Images/AppleIpad.jpg";
import CartoonTab from "./components/Images/CartoonTab.jpg";
import ManKind from "./components/Images/ManKind.jpg";
import Button from "./components/Shared/Button";
import CardContainer from "./components/CardContainer";

function App() {
	return (
		<div>
			<MobileHeader />
			<Navlinks />
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
			<div className="py-3">
				<Bannersection
					url={AppleWatch}
					SeriesUrl={WatchLogo}
					SubText="It’s our largest display yet."
					title={""}
					children={""}
				/>
			</div>
			<div className="py-3">
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
			</div>
			<div className="grid lg:grid-cols-2 gap-3 grid-cols-1">
				<CardContainer url={AppleLaptop} />
				<CardContainer url={AppleMobile} />
				<CardContainer url={MackbookPro} />
				<CardContainer url={AppleIpad} />
				<CardContainer url={CartoonTab} />
				<CardContainer url={ManKind} />
			</div>
		</div>
	);
}

export default App;
