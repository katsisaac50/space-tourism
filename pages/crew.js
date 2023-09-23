import React, { useState } from 'react';
import Image from 'next/image';
import planetItems from "../lib/data/planetItem.json";
import crewImages from '@/lib/data/crewImages.json';
import image from '../public/assets/destination/image-mars.png';

function Crew() {
  console.log(crewImages)
  
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);

  const handlePlanetSelect = (index) => {
    setSelectedPlanetIndex(index);
  };

  const selectedImage = crewImages[selectedPlanetIndex];
                const imageUrl = `/public/assets/crew/${selectedImage}`;

                console.log(imageUrl)

  return (
    <div className="crew">
      <div className="container mx-auto flex mt-40">
      <div className="text-white items-center justify-center flex-grow ml-10 pl-10 mt-28">
      <p className="uppercase font-serif text-2xl tracking-widest pb-24">
      <span className="font-bold font-mono text-gray-600">01 </span>
      Meet your crew
    </p>
          
          {selectedPlanetIndex !== null && (
            <div>
            <h3>{crewImages[selectedPlanetIndex].expertise}</h3>
              <span className="text-8xl font-serif"> 
                {crewImages[selectedPlanetIndex].name}
              </span>
              <p className="pt-6 font-mono">
                {crewImages[selectedPlanetIndex].details}
              </p>
              <hr className="h-px my-8 border-1 dark:bg-gray-800"></hr>
              <div className="radio-button-group">
              <ol className="flex space-x-4 pb-6">
              {crewImages.map((item, index) => {
                console.log(index);
                const hoverClassName =
                  selectedPlanetIndex === index
                    ? 'hover:text-blue-700'
                    : 'hover:text-red-700 hover:border-b-2';
                const selectedClassName =
                  selectedPlanetIndex === index ? 'border-b-2' : '';
  
                  
  
                return (
                  <li key={index}>
                    <div
                      className={`text-white space-x-3 hover:cursor-pointer transition duration-300 ${hoverClassName} ${selectedClassName}`}
                      onClick={() => handlePlanetSelect(index)}
                    >
                    <label for="carousel-3" className= {`carousel-bullet cursor-pointer block text-4xl text-white  ${hoverClassName} ${selectedClassName}`}>•</label>
                    </div>
                  </li>
                );
              })}
            </ol>
              </div>
            </div>
          )}
        </div>
        <section className="text-justify text-white w-[26rem] h-[20rem] flex-shrink-0">
          <div className="ml-20">
            <Image
              src={crewImages[selectedPlanetIndex].image}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Crew;
