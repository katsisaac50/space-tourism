import '../styles/globals.css'; // Import global CSS here
import RootLayout from '../components/RootLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define metadata based on the route
  const metaData = {
    '/': { title: 'Home', description: 'Welcome to the home page' },
    '/about': { title: 'About', description: 'Learn about us' },
    // Add metadata for other routes as needed
  };

  useEffect(() => {
    // Update metadata based on the current route
    const { title, description } = metaData[router.pathname] || {};
    if (title || description) {
      document.title = title || '';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description || '');
      }
    }
  }, [router.pathname]);
  return (
    <>
    <Head>
        {/* Add any other global meta tags here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
    </>
  );
}

export default MyApp;
