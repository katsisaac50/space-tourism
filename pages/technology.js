import { useState } from "react";
import Image from "next/image";
import technologyData from "../lib/data/technologyData.json";

function Technology() {
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState(0);

  const handleVehicleSelect = (index) => {
    setSelectedVehicleIndex(index);
  };

  const selectedPlanetData = technologyData[selectedVehicleIndex];

  return (
    <div className="home-background">
      <div className="container mx-auto flex mt-64">
        <ul>
          {technologyData.map((data, index) => (
            
              <div key={index}
                className="space-y-4 items-center ml-1 pl-0 mt-32"
                onClick={() => handleVehicleSelect(index)}
              >
                <div className="w-16 h-16 rounded-full bg-white text-gray-700 text-4xl font-serif flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            
          ))}
        </ul>

        <section className="ml-8 ext-justify text-white w-[26rem] h-[20rem] flex-shrink-0">
          <h2 className="text-2xl uppercase font-mono tracking-[.02rem]">
            So, you want to travel to
          </h2>
          <h1 className="pt-3.5 font-serif text-4xl font-bold uppercase">
            {technologyData[selectedVehicleIndex].name}
          </h1>

          <p className="text-base pt-12 font-mono">
            {technologyData[selectedVehicleIndex].details}
          </p>
        </section>

        <div className="ml-20">
          <Image
            src={selectedPlanetData.image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
