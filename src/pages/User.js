import { useSharedState } from '../store';
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useLocation,
} from 'react-router-dom';
import { removeStoredAuthToken } from '../utils';
import Jokes from './Jokes';
import Anime from './Anime';

const User = () => {
  const [sharedState, setSharedState] = useSharedState();
  const { path } = useRouteMatch();
  const location = useLocation();

  const handleLogout = () => {
    removeStoredAuthToken();
    setSharedState((prev) => ({
      ...prev,
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }));
  };

  const { firstName, lastName } = sharedState.user;
  return (
    <div className='relative min-h-screen w-screen bg-gradient-to-r to-yellow-300 via-pink-500 from-red-500  shadow-lg'>
      <div className='w-full h-20 bg-white flex items-center   justify-between z-50 '>
        <h1 className='font-semibold tracking-wide pl-5 hidden md:block'>
          {sharedState.user ? `${firstName} ${lastName}` : null}
        </h1>

        <ul className='flex space-x-5 pl-5 md:pl-0 font-semibold'>
          <li
            className={`jokes ${
              location.pathname === '/user' ? 'border-b-4 border-blue-400' : ''
            }`}
          >
            <Link to={path}>Jokes</Link>
          </li>
          <li
            className={`anime ${
              location.pathname === '/user/anime'
                ? 'border-b-4 border-blue-400'
                : ''
            }`}
          >
            <Link to={`${path}/anime`}>Anime</Link>
          </li>
        </ul>

        <div className='flex justify-center items-center space-x-3 h-full'>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-purple-200 font-semibold'>
            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
          </div>
          <h1
            onClick={handleLogout}
            className='h-full bg-blue-400 text-white font-semibold flex items-center px-6 hover:bg-red-400 hover: cursor-pointer'
          >
            Logout
          </h1>
        </div>
      </div>
      <div
        className='absolute flex flex-col md:w-1/2 w-full  top-20 bottom-0 left-1/2'
        style={{ transform: 'translateX(-50%)' }}
      >
        <Switch>
          <Route exact path={path}>
            <Jokes />
          </Route>
          <Route exact path={`${path}/anime`}>
            <Anime />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default User;
