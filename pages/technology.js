

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
    <div class="grid grid-rows-3 grid-flow-col gap-4 home-background text-white">
  <div class="flex col-start-1 col-end-1 ...">
  <ul className="space-y-6 mt-36 ml-10">
          {technologyData.map((data, index) => (
            
              
                <div key={index} onClick={() => handleVehicleSelect(index)} className="w-16 h-16 rounded-full bg-white text-gray-700 text-4xl font-serif flex items-center justify-center">
                  {index + 1}
                </div>
              
            
          ))}
        </ul>
      <div className="ml-20 mt-36" >
          <h2 className="text-xl uppercase font-mono tracking-[.02rem]uppercase">
          The terminology...
          </h2>
          <h1 className="pt-3.5 font-serif text-5xl font-bold uppercase">
            {technologyData[selectedVehicleIndex].name}
          </h1>

          <p className="text-base pt-10 font-mono">
            {technologyData[selectedVehicleIndex].details}
          </p>
      </div>
  </div>
  <div class="col-span-2 ...">
  <div className="">
          <Image
            src={selectedPlanetData.image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
  </div>
  <div class="row-span-2 col-span-1 ...">
  <p className="uppercase font-serif text-2xl tracking-widest">
            <span className="font-bold font-mono text-gray-600">03 </span>
            Space launch 101
          </p>
  </div>
</div>
  );
}

export default Technology;
