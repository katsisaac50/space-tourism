function HomePage() {
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
    
      <section className="text-white">
      
      <h2>So, you want to travel to</h2>
      <h1>Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the edge of it.
        Well, sit back, and relax because we’ll give you a truly out of this
        world experience!
      </p>

      </section>
      <div
  className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-white text-gray-700 text-xl font-bold"
>
Explore
</div>
    </div>
  );
}

export default HomePage;
