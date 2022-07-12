import './App.css';
import MobileHeader from "./components/MobileHeader";
import Navlinks from "./components/Navlinks";
import Footer from "./components/Footer";
import CardProps from "./components/CardProps";
import BannerProps from "./components/BannerProps";

function App() {
	return (
		<div>
			<MobileHeader />
			<Navlinks />
			<BannerProps />
			<CardProps />
			<div className="mt-2">
				<Footer />
			</div>
		</div>
	);
}

export default App;
