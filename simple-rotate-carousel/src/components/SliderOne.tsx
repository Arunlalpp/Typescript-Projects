import React, { useEffect, useState } from "react";
import classNames from "classnames";

function SliderOne() {
  const testData = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos sint laborum earum ea officia. Nemo id, excepturi, ex illum enim temporibus magnam officia non doloremque consequatur dolores sit numquam.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastIndex, setIsLastIndex] = useState(false);

  useEffect(() => {
    let currentTimeout: NodeJS.Timeout | undefined;
    if (currentIndex < testData.length) {
      currentTimeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === testData.length - 1) {
          setTimeout(() => {
            setIsLastIndex(true);
          }, 1000);
        }
      }, 1000);
    }
    return () => {
      clearTimeout(currentTimeout);
    };
  }, [currentIndex, isLastIndex, testData.length]);

  return (
    <div className="w-full h-full bg-white rounded-medium drop-shadow-lg pl-5">
      <ul className="font-regular p-5 flex flex-col gap-4 list-disc">
        {testData.slice(0, currentIndex).map((sentence, index) => {
          const listItemStyle = classNames("", {
            "marker:text-red-400": currentIndex - 1 === index,
            "marker:text-green-800": currentIndex - 1 !== index || isLastIndex,
          });

          return (
            <li className={listItemStyle} key={sentence}>
              {sentence}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SliderOne;
