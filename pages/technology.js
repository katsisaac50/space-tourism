import Image from "next/image";

function Technology() {
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

  return (
    <div className="home-background">
      <div className="container mx-auto flex mt-64">
      <div className="space-y-4 items-center ml-1 pl-0 mt-32">
          <div className="w-16 h-16 rounded-full bg-white text-gray-700 text-4xl font-serif flex items-center justify-center">
            1
          </div>
          <div className="w-16 h-16 rounded-full bg-white text-gray-700 text-4xl font-serif flex items-center justify-center">
            2
          </div>
          <div className="w-16 h-16 rounded-full bg-white text-gray-700 text-4xl font-serif flex items-center justify-center">
            3
          </div>
        </div>
        <section
          className="ml-8 ext-justify text-white w-[26rem] h-[20rem] flex-shrink-0"
        >
          <h2 className="text-2xl uppercase font-mono tracking-[.02rem]">So, you want to travel to</h2>
          <h1 className="pt-3.5 font-serif text-9xl font-bold uppercase">
  Space
</h1>

          <p className="text-base pt-12 font-mono">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </section>
        <div className="ml-20">
            <Image
              src={crewImages[selectedPlanetIndex].image}
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
