import { useEffect } from 'react';
import Routes from './routes';
import { useSharedState } from './store';
import { api, getStoredAuthToken } from './utils';

const App = () => {
  const [sharedState, setSharedState] = useSharedState();
  const setUser = async () => {
    const auth = getStoredAuthToken();
    if (auth && !sharedState.isAuthenticated) {
      try {
        const res = await api.get('currentUser');
        const { data } = res;
        setSharedState((prev) => ({
          ...prev,
          user: data.user,
          isAuthenticated: true,
          isLoading: false,
        }));
      } catch (err) {
        console.log(err.response);
        setSharedState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    } else {
      setSharedState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };
  useEffect(() => {
    setUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (sharedState.isLoading) {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <span class='animate-ping  inline-flex h-10 w-10 rounded-full bg-purple-400 opacity-75'></span>
      </div>
    );
  }

  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
