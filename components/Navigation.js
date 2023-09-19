import Link from 'next/link';
import { useRouter } from 'next/router';

const navigationItems = [
  { text: '00 Home', link: '/' },
  { text: '01 Destination', link: '/About' },
  { text: '02 Crew', link: '/About' },
  { text: '03 Technology', link: '/About' },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="backdrop-blur-sm bg-gray-900/25 absolute z-20 py-6 right-nav">
      <ul className="flex space-x-4 pr-8 ml-80">
        {navigationItems.map((item, index) => {
          const isCurrentPage = router.pathname === item.link;
          const hoverClassName = isCurrentPage ? 'hover:text-yellow-300 hover:border-b-2' : 'hover:text-white';

          return (
          <li key={index}>
            <Link href={item.link}>
              <div
                className={`text-white font-bold hover:text-yellow-300 ${
                  router.pathname === item.link ? 'border-b-2' : ''
                }`}
              >
                {item.text}
              </div>
            </Link>
          </li>
        )})}
      </ul>
    </nav>
  );
};

export default Navigation;
