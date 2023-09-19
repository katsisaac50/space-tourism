import React from 'react';
import Image from 'next/image';
import marsImage from '../public/assets/destination/image-mars.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

function About() {
  const router = useRouter();
  
  const planetItems = [
    { text: 'Moon', link: '/' },
    { text: 'Mars', link: '/hel' },
    { text: 'Europa', link: '/lk' },
    { text: 'Titan', link: '/ie' },
  ];

  return (
    <div className="mars">
      <div className="container mx-auto flex mt-40">
        <section
          className="text-justify text-white w-[26rem] h-[20rem] flex-shrink-0"
        >
        <p className='uppercase font-serif text-2xl tracking-widest pb-24'><span className='font-bold font-mono text-gray-600'>01 </span>Pick your destination</p>
        <div className='ml-20'><Image
      src={marsImage}
      width={500}
      height={500}
      alt="Picture of the author"
    /></div>
        </section>
        <div className="text-white flex items-center justify-center flex-grow ml-96 pl-20 mt-32">
        <ul className='flex space-x-4'>
        {planetItems.map((item, index) => {
          const isCurrentPage = router.pathname === item.link;
          const hoverClassName = isCurrentPage ? 'hover:text-yellow-300' : 'hover:text-white';
          const selectedClassName = isCurrentPage ? 'border-b-2 border-yellow-300' : '';

          return (
          <li key={index}>
            <Link href={item.link}>
              <div
              className={`text-white space-x-3 transition duration-300 ${hoverClassName} ${selectedClassName} ${isCurrentPage ? '' : 'hover:border-b-2'}`}
              >
              <span className="font-bold">{item.text}</span> 
              </div>
            </Link>
          </li>
        )})}
        </ul>
        
        <p>Mars1</p>
      
        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!
      
        Avg. distance
        225 mil. km
      
        Est. travel time
        9 months
        </div>
      </div>
    </div>
  );
}

export default About;
