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
      
        <ul className="space-y-6 mt-36">
          {technologyData.map((data, index) => (
            
              
                <div key={index} onClick={() => handleVehicleSelect(index)} className="w-16 h-16 rounded-full bg-white text-gray-700 text-4xl font-serif flex items-center justify-center">
                  {index + 1}
                </div>
              
            
          ))}
        </ul>
        
        <section className="ml-16  text-white w-[34rem] h-[50rem]" >
        <p className="uppercase font-serif text-2xl tracking-widest">
            <span className="font-bold font-mono text-gray-600">03 </span>
            Space launch 101
          </p>
          <h2 className="text-xl uppercase font-mono tracking-[.02rem]uppercase">
          The terminology...
          </h2>
          <h1 className="pt-3.5 font-serif text-5xl font-bold uppercase">
            {technologyData[selectedVehicleIndex].name}
          </h1>

          <p className="text-base pt-10 font-mono">
            {technologyData[selectedVehicleIndex].details}
          </p>
        </section>

        <div className="ml-40">
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