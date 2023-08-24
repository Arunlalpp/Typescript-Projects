import React, { MouseEvent, useCallback, useEffect, useState } from "react";

export interface PieChartWithGridLayerProps {
  pieChartLineColor?: string;
  numberOfRows: number;
  previewCellTaps: boolean;
  numberOfColumns: number;
  handleCellClicks?: (x: string, y: string) => void;
  gridWrapperRef?: React.RefObject<HTMLDivElement>;
}

function PieChartWithGridLayer({
  pieChartLineColor,
  numberOfColumns,
  numberOfRows,
  previewCellTaps,
  handleCellClicks,
  gridWrapperRef,
}: PieChartWithGridLayerProps) {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  const cellWidthWithColumns = wrapperWidth / numberOfColumns;
  const cellWidthWithRows = wrapperHeight / numberOfRows;
  const isCellWidthLarger = cellWidthWithColumns > cellWidthWithRows;
  const tapHighlightColor = previewCellTaps ? "bg-red-500" : "bg-blue-500";
  const cellGridHeight = Math.trunc(cellWidthWithColumns * numberOfRows);
  const cellGridWidth = Math.trunc(cellWidthWithRows * numberOfColumns);

  let x = 0;
  let y = 0;
  let gridCellWidth = `${100 / numberOfColumns}%`;
  let gridCellHeight = "auto";

  const handleWindowResize = useCallback(() => {
    if (gridWrapperRef?.current) {
      setWrapperWidth(gridWrapperRef.current.offsetWidth);
      setWrapperHeight(gridWrapperRef.current.offsetHeight);
    }
  }, [gridWrapperRef]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const pieChartGridCellBorderColor = pieChartLineColor || "transparent";

  return (
    <div
      style={{
        width: isCellWidthLarger ? cellGridWidth : "100%",
        height: isCellWidthLarger ? "100%" : cellGridHeight,
      }}
      className="flex flex-wrap z-50"
    >
      {Array.from(
        { length: numberOfColumns * numberOfRows },
        (_, index: number) => {
          const key = `column-${index}`;

          if (index) {
            x += 1;
          }
          if (!(index % numberOfColumns) && index >= numberOfColumns) {
            y += 1;
            x = 0;
          }

          const handleClickImageIndices = (
            e: MouseEvent<HTMLButtonElement>
          ) => {
            const xCoordinate = e.currentTarget.getAttribute("data-x") || "";
            const yCoordinate = e.currentTarget.getAttribute("data-y") || "";

            if (handleCellClicks) {
              handleCellClicks(xCoordinate, yCoordinate);
            }
          };
          return (
            <button
              id={`${x}-${y}`}
              type="button"
              aria-label="cell button"
              onClick={handleClickImageIndices}
              key={key}
              data-x={x}
              data-y={y}
              style={{
                width: gridCellWidth,
                height: gridCellHeight,
                aspectRatio: "1/1",
                border: `1px solid ${pieChartGridCellBorderColor}`,
                WebkitTapHighlightColor: tapHighlightColor,
              }}
            />
          );
        }
      )}
    </div>
  );
}

export default PieChartWithGridLayer;
