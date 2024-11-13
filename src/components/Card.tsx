import React, { useEffect, useRef } from "react";
import { Progress } from "./Progress";

const Card = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    // Start scrolling at an interval
    const scrollInterval: number = window.setInterval(() => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset scroll to start of content for loop
        } else {
          scrollAmount += scrollSpeed;
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
    }, 8); // Adjust for smoother or faster scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-x-10 w-full overflow-x-hidden whitespace-nowrap"
      >
        {/* Duplicate items for seamless infinite scroll */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex-shrink-0 flex flex-col justify-center items-center bg-white border-2 p-6 rounded-md min-w-[800px]">
              <img alt="macbook" src="./mac.png" width={800} />
              <div className="w-full  mt-8">
                <p>$ 0/ 5,550</p>
                <Progress value={33} className="bg-slate-200 h-2 w-full" />
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center flex-col items-center bg-white border-2 p-6 rounded-md min-w-[800px]">
              <img alt="iphone" src="./iphone.png" width={800} />
              <div className="w-full">
                <p>$ 0/ 1,599</p>
                <Progress value={66} className="bg-slate-200 h-2 w-full" />
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center flex-col items-center bg-white border-2 p-6 rounded-md min-w-[800px]">
              <img alt="mini" src="./mini.png" width={800} />
              <div className="w-full mt-8">
                <p>$ 0/ 1,500</p>
                <Progress value={100} className="bg-slate-200 h-2 w-full" />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Card;
