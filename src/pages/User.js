import React, { useEffect, useState } from 'react';
import { useSharedState } from '../store';
import Jokes from './jokes';

const User = () => {
  const [sharedState] = useSharedState();
  const [jokes] = useState([...Jokes]);
  // TODO: Call jokes from api

  const { firstName, lastName } = sharedState.user;
  return (
    <div className='relative min-h-screen w-screen bg-gradient-to-r to-yellow-300 via-pink-500 from-red-500  shadow-lg'>
      <div className='w-full h-20 bg-white flex items-center   justify-between z-50 '>
        <h1 className='font-semibold tracking-wide pl-5 '>
          {sharedState.user ? `${firstName} ${lastName}` : null}
        </h1>

        <div className='flex justify-center items-center space-x-3 h-full'>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-purple-200 font-semibold'>
            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
          </div>
          <h1 className='h-full bg-blue-400 text-white font-semibold flex items-center px-6 hover:bg-red-400 hover: cursor-pointer'>
            Logout
          </h1>
        </div>
      </div>
      <div
        className='absolute flex flex-col md:w-1/2 w-full  top-20 bottom-0 left-1/2'
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className=' min-h-0 flex flex-col flex-grow'>
          <div className='h-full p-8 flex flex-col flex-grow overflow-auto'>
            {jokes.length
              ? jokes.map((joke) => (
                  <div
                    key={joke.id}
                    className='w-full py-2 flex bg-white opacity-70 rounded-xl my-4 px-3'
                  >
                    <div className='textBox  flex-grow flex flex-col justify-center items-center '>
                      <p className='uppercase font-bold text-lg '>
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
      </div>
    </div>
  );
};

export default User;
