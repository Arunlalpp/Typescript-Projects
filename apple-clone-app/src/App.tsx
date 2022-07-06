import './App.css';
import MobileHeader from "./components/MobileHeader";
import Navlinks from "./components/Navlinks";
import Bannersection from "./components/Bannersection";
import bannerImage from "./components/Images/Bannerimage.jpg";
import Button from "./components/Shared/Button";

function App() {
	return (
		<div>
			<MobileHeader />
			<Navlinks />
			<div className="bg-[#fbfbfd] py-3 text-center">
				<span className="text-sm flex flex-row justify-center items-center">
					Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit
					cards on orders over ₹54900.
					<Button ButtonText="Learn more" />
				</span>
			</div>
			<Bannersection
				url={bannerImage}
				title="iphone 13"
				SubText="Your new superpower"
			/>
		</div>
	);
}

export default App;
