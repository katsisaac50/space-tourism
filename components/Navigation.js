import Link from 'next/link';
import { useRouter } from 'next/router';

const navigationItems = [
  { text: '00 Home', link: '/' },
  { text: '01 Destination', link: '/destination' },
  { text: '02 Crew', link: '/crew' },
  { text: '03 Technology', link: '/technology' },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="backdrop-blur-sm bg-gray-900/25 absolute py-6 right-0 left-90 mt-4">
      <div className="container mx-auto">
        <ul className="flex space-x-12 px-44 ml-75">
          {navigationItems.map((item, index) => {
            const isCurrentPage = router.pathname === item.link;
            const hoverClassName = isCurrentPage ? 'hover:text-yellow-300' : 'hover:text-white';
            const selectedClassName = isCurrentPage ? 'border-b-2 border-yellow-300' : '';

            // Split the text into two parts: figure and the rest
            const parts = item.text.split(' ');
            const figure = parts[0];
            const rest = parts.slice(1).join(' ');

            return (
              <li key={index}>
                <Link href={item.link}>
                  <div
                    className={`text-white space-x-3 transition duration-300 ${hoverClassName} ${selectedClassName} ${isCurrentPage ? '' : 'hover:border-b-2'}`}
                  >
                    <span className="font-bold">{figure}</span> <span className='font-mono'>{rest}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
