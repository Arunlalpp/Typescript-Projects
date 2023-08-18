import React, { useCallback, useState } from "react";

export interface Dimensions {
  width: number;
  length: number;
}

export interface Cells {
  x: number;
  y: number;
}
export interface CellsWithCyclingImages {
  cells: Cells[];
  imageIndicesToCycle: number[];
}

export interface PieChartWithGridConfigs {
  URL: string;
  color: string;
  dimensions: Dimensions;
  imageURL: string;
  imagesURL: string[];
  previewCellTaps: boolean;
  IndividualCellsDirections: CellsWithCyclingImages[];
}

export interface PieChartWithGridProps {
  cellsName?: string;
  pieChartWithGridConfig: PieChartWithGridConfigs;
  layeredImageURL: string[];
  gridName: string;
  onPieChartInteractions: (userLayeredImageIndices: number[]) => void;
}

function PieChartWithGrid({
  cellsName,
  pieChartWithGridConfig,
  layeredImageURL,
  gridName,
  onPieChartInteractions,
}: PieChartWithGridProps) {
  const [displayImages, setDisplayImages] = useState<string[]>([]);
  const [displayImageIndices, setDisplayImagesIndices] = useState<number[]>([]);

  const getImagesIndicesToDisplayFrom = useCallback(
    (formattedImagesIndices: number[]) => {
      if (onPieChartInteractions) {
        const outputImageIndices = formattedImagesIndices.filter(
          (index: number) => index != null && index !== undefined
        );

        onPieChartInteractions(outputImageIndices);
      }
    },
    [onPieChartInteractions]
  );

  return <div></div>;
}

export default PieChartWithGrid;
