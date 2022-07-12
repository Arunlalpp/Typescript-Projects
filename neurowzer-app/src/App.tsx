import React from "react";
import "./App.css";
import ButtonStyle from "./components/ButtonStyle";
import LearningJourney from "./components/LearningJourney";
import SelfHelp from "./components/SelfHelp";
import bannerImage from "./Images/BannerImage.jpg";

function App() {
	return (
		<div>
			<LearningJourney
				CardTitle="6 Pillers of Brain Health"
				SubTitle="“Even the highly successful people have only 24 hours to
			work.”"
				Subtext="YEAT SMART, THINK BETTER. As you grow older, your brain is
			affected by lifestyle and environmental factors, resulting in
			a process called oxidation, which damages brain cells."
			/>
			<SelfHelp url={bannerImage} />
			{/* <ButtonStyle                                        
				buttonText="Start Learning"
				buttonSize="medium"
				buttonSture="btn--primary--outline"
			/> */}
		</div>
	);
}

export default App;
