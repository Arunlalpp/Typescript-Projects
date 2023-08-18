import React, { useState } from "react";

export interface Cells {
  x: number;
  y: number;
}

export interface BlockCellButtonProps {
  cells: Cells[];
  gridName?: string;
  handleClick: (currentImageIndex: number) => void;
  height: number;
  imageIndex: number[];
  isDisabled?: boolean;
  previewCellTaps: boolean;
  width: number;
}

function BlockCellButton({
  cells,
  gridName,
  handleClick,
  height,
  imageIndex,
  isDisabled,
  previewCellTaps,
  width,
}: BlockCellButtonProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toConvertPercentage = (value: number, totalValue: number) =>
    `${(value * 100) / totalValue}%`;

  const onButtonClick = () => {
    const isLastIndexIs = selectedIndex === imageIndex.length - 1;
    const updatedIndexIs = isLastIndexIs ? 0 : selectedIndex + 1;

    setSelectedIndex(updatedIndexIs);
    const currentImageIndex = imageIndex[updatedIndexIs];
    handleClick(currentImageIndex);
  };

  const isShouldShowPreviewTaps = previewCellTaps ? "red" : "transparent";
  return (
    <>
      {cells.map((cell, index) => {
        const buttonStyles = {
          left: toConvertPercentage(cell.x, width),
          top: toConvertPercentage(cell.y, height),
          width: `${100 / width}`,
          height: `${100 / height}`,
          WebkitTapHighlightColor: isShouldShowPreviewTaps,
        };
        const key = `cell-${index}`;

        return (
          <button
            name={gridName}
            aria-label="cell"
            type="button"
            key={key}
            disabled={isDisabled}
            style={buttonStyles}
            className="absolute z-50"
            onClick={onButtonClick}
          />
        );
      })}
    </>
  );
}

export default BlockCellButton;
