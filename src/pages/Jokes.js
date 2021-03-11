import React, { useState } from 'react';
import JokeList from './jokeList';

const Jokes = () => {
  const [jokes] = useState([...JokeList]);

  return (
    <div className=' min-h-0 flex flex-col flex-grow'>
      <div className='h-full p-8 flex flex-col flex-grow overflow-auto'>
        {jokes.length
          ? jokes.map((joke) => (
              <div
                key={joke.id}
                className='w-full py-2 flex bg-white  rounded-xl my-4 px-3'
              >
                <div className='textBox  flex-grow flex flex-col justify-center items-center '>
                  <p className='uppercase tracking-wide text-lg  text-indigo-500 font-semibold'>
                    {joke.type}
                  </p>
                  <p className='text-center '>
                    <i>{joke.setup}</i>
                  </p>
                  <span className='mt-2 text-center rounded-full py-2 px-4 text-white font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                    {joke.punchline}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Jokes;
