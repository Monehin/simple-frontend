import NotFoundBg from '../assets/images/not-found-bg.jpeg';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const NotFound = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-r to-yellow-300 via-pink-500 from-red-500 flex justify-center items-center p-5 shadow-lg'>
      <div className={`relative h-105 w-120 bg-white overflow-hidden`}>
        <div className='absolute h-full w-full top-0 left-0 flex '>
          <div className='imgbox relative h-full w-1/2  md:block hidden'>
            <img
              className='absolute top-0 left-0 w-full h-full object-cover '
              src={NotFoundBg}
              alt=''
            />
          </div>
          <div className='formbox relative md:w-1/2 w-full h-full bg-white flex flex-col justify-center items-center p-10'>
            <div className='flex items-center space-x-1'>
              <ExclamationCircleOutlined className='text-2xl pb-1' />
              <h1 className='text-3xl'>404</h1>
            </div>

            <p className='signup relative mt-3 text-sm text-gray-500'>
              Page not found! Go back to{' '}
              <Link
                to='/login'
                className='text-blue-400 font-semibold uppercase cursor-pointer'
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
