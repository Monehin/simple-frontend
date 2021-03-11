import React, { useState, useEffect } from 'react';

const Anime = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://kitsu.io/api/edge/anime';

  useEffect(() => {
    const getAnimes = async () => {
      try {
        const res = await fetch(url);
        const list = await res.json();
        setAnimes([...animes, ...list.data]);
        setLoading(false);
      } catch (err) {}
    };
    getAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=' min-h-0 flex flex-col flex-grow'>
      <div className=' flex-grow overflow-auto px-8 mt-6'>
        {loading ? (
          <div className='flex w-full h-full flex-grow justify-center items-center'>
            <span className='animate-ping  inline-flex h-10 w-10 rounded-full bg-white opacity-75'></span>
          </div>
        ) : animes.length ? (
          animes.map((anime) => (
            <div
              key={anime.id}
              className='max-w-md mx-auto mt-4  bg-white rounded-xl overflow-hidden md:max-w-2xl'
            >
              <div className='md:flex'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='h-48 w-full object-cover md:w-48'
                    src={anime.attributes.posterImage.small}
                    alt='Man looking at item at a store'
                  />
                </div>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-lg  text-indigo-500 font-semibold'>
                    {anime.attributes.titles.en}
                  </div>
                  <p
                    href='#'
                    className='block mt-1 text-sm font-bold leading-tight text-black hover:underline'
                  >
                    {new Date(anime.attributes.createdAt).toDateString()}
                  </p>
                  <p className='mt-2 text-gray-500 overflow-ellipsis overflow-hidden'>
                    {anime.attributes.synopsis
                      .split(' ')
                      .splice(0, 25)
                      .join(' ')}{' '}
                    ... <span className='text-blue-400'>Read More</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Anime;
