import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Navigation from './Navigation';
import HorizontalLine from './HorizontalLine';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({ children }) {
  return (
    <div className="relative">
      <div className="top-left-image">
        <Image
          src="../assets/shared/logo.svg"
          width={30}
          height={30}
          alt="Picture of the author"
        />
      </div>
      <div className="w-full">
        <div className="absolute inset-0 z-10">
          <HorizontalLine />
        </div>
        <div className="flex">
          <div className="ml-auto"> 
            <Navigation />
          </div>
          <div className="ml-auto flex-grow"> 
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;

