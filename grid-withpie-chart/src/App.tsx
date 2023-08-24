import React, { useRef } from "react";
import PieChartWithGridLayer from "./components/PieChartWithGridLayer";
const ref = useRef<HTMLDivElement>;

function App() {
  return (
    <div className="App">
      <PieChartWithGridLayer
        // gridWrapperRef={ref}
        numberOfColumns={4}
        numberOfRows={4}
        previewCellTaps={true}
        pieChartLineColor="#00ffff"
      />
    </div>
  );
}

export default App;
