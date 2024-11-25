import { Link } from 'react-router-dom';
import { Button } from '../components';

import PageNotFoundImage from '../assets/images/pagenotfound.png';
import { useEffect } from 'react';

export const PageNotFound = () => {
  useEffect(()=> {
    document.title = 'Page Not Found / Cinemate';
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center">
          <p className='text-7xl text-grey-700 font-bold dark:text-white pb-4'>404, Oops!</p>
          <div className='max-w-xl'>
            <img className='rounded' src={PageNotFoundImage} alt="404 Page not found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button children={'Back to home'} />
          </Link>
        </div>
      </section>
    </main>
  )
}
