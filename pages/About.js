import React from 'react';
import Image from 'next/image';
import marsImage from '../public/assets/destination/image-mars.png';

function About() {
  const projects = [
    {
      title: 'Project 1',
      category: 'Category 1',
      url: '/project1',
      users: [
        { name: 'User 1', avatar: 'user1.jpg' },
        { name: 'User 2', avatar: 'user2.jpg' },
      ],
    },
    // Add more projects as needed
  ];

  const planetItems = [
    { text: '00 Home', link: '/' },
    { text: '01 Destination', link: '/About' },
    { text: '02 Crew', link: '/About' },
    { text: '03 Technology', link: '/About' },
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
        <ul> 
        <li>Moon</li>
        <li>Mars</li>
        <li>Europa</li>
        <li>Titan</li>
        </ul>
        
      
        Mars
      
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
