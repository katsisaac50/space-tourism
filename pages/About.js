import React, { useState } from 'react';
import Image from 'next/image';

function About() {
  const planetItems = [
    {
      text: 'Moon',
      image: '/assets/destination/image-moon.png',
      details: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      'Est. travel time': '3 days',
      'Avg. distance': '384,400 km',
    },
    {
      text: 'Mars',
      image: '/assets/destination/image-mars.png',
      details: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      'Est. travel time': '9 months',
      'Avg. distance': '225 mil. km',
    },
    {
      text: 'Europa',
      image: '/assets/destination/image-europa.png',
      details: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      'Est. travel time': '3 years',
      'Avg. distance': '628 MIL km',
    },
    {
      text: 'Titan',
      image: '/assets/destination/image-titan.png',
      details: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      'Est. travel time': '7 years',
      'Avg. distance': '1.6 bil. km',
    },
  ];
  

  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);

  const handlePlanetSelect = (index) => {
    setSelectedPlanetIndex(index);
  };

  return (
    <div className="mars">
      <div className="container mx-auto flex mt-40">
        <section className="text-justify text-white w-[26rem] h-[20rem] flex-shrink-0">
          <p className="uppercase font-serif text-2xl tracking-widest pb-24">
            <span className="font-bold font-mono text-gray-600">01 </span>
            Pick your destination
          </p>
          <div className="ml-20">
            <Image
              src={planetItems[selectedPlanetIndex].image}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </section>
        <div className="text-white items-center justify-center flex-grow ml-80 pl-10 mt-28">
          <ul className="flex space-x-4 pb-6">
            {planetItems.map((item, index) => {
              const hoverClassName =
                selectedPlanetIndex === index
                  ? 'hover:text-yellow-300 hover:border-b-2 border-yellow-300'
                  : 'hover:text-white hover:border-b-2';
              const selectedClassName =
                selectedPlanetIndex === index ? 'border-b-2 border-yellow-300' : '';

              return (
                <li key={index}>
                  <div
                    className={`text-white space-x-3 hover:cursor-pointer transition duration-300 ${hoverClassName} ${selectedClassName}`}
                    onClick={() => handlePlanetSelect(index)}
                  >
                    <span className="font-bold">{item.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          {selectedPlanetIndex !== null && (
            <div>
              <span className="text-8xl font-serif">
                {planetItems[selectedPlanetIndex].text}
              </span>
              <p className="pt-6 font-mono">
                {planetItems[selectedPlanetIndex].details}
              </p>
              <hr className="h-px my-8 border-1 dark:bg-gray-800"></hr>
              <div className="flex justify-between uppercase">
                <div>
                  <span className="font-mono text-sm">Avg. distance</span>
                  <br />
                  <span className="font-serif text-3xl">
                    {planetItems[selectedPlanetIndex]['Avg. distance']}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-sm">Est. travel time</span>
                  <br />
                  <span className="font-serif text-3xl">
                    {planetItems[selectedPlanetIndex]['Est. travel time']}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
