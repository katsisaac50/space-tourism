import React, { useState } from 'react';
import Image from 'next/image';
import marsImage from '../public/assets/destination/image-mars.png';
import { useRouter } from 'next/router';

function About() {
  const router = useRouter();

  const planetItems = [
    { text: 'Moon', image: '../public/assets/destination/image-moon.png' },
    { text: 'Mars', image: '../public/assets/destination/image-mars.png' },
    { text: 'Europa', image: '../public/assets/destination/image-europa.png' },
    { text: 'Titan', image: '../public/assets/destination/image-titan.png' },
  ];

  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);

  const handlePlanetSelect = (item, index) => {
    setSelectedPlanetIndex(index);
    router.push(item.link); // Navigate to the selected planet's link
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
              src={marsImage}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </section>
        <div className="text-white items-center justify-center flex-grow ml-96 pl-20 mt-28">
          <ul className="flex space-x-4 pb-6">
            {planetItems.map((item, index) => {
              const isCurrentPage = router.pathname === item.link;
              const hoverClassName = isCurrentPage
                ? 'hover:text-yellow-300 hover:border-b-2 border-yellow-300'
                : 'hover:text-white hover:border-b-2';
              const selectedClassName =
                selectedPlanetIndex === index ? 'border-b-2 border-yellow-300' : '';

              return (
                <li key={index}>
                  <div
                    className={`text-white space-x-3 hover:cursor-pointer transition duration-300 ${hoverClassName} ${selectedClassName}`}
                    onClick={() => handlePlanetSelect(item, index)}
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
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our
                solar system. It’s two and a half times the size of Everest!
              </p>
              <hr className="h-px my-8 border-1 dark:bg-gray-800"></hr>
              <div className="flex justify-between uppercase">
                <div>
                  <span className="font-mono text-sm ">Avg. distance</span>
                  <br />
                  <span className="font-serif text-3xl">225 mil. km</span>
                </div>
                <div>
                  <span className="font-mono text-sm">Est. travel time</span>
                  <br />
                  <span className="font-serif text-3xl">9 months</span>
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
