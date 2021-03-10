import { Route, Redirect } from 'react-router-dom';
import { useSharedState } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [sharedState] = useSharedState();

  return (
    <Route
      {...rest}
      render={(props) =>
        !sharedState.isLoading ? (
          sharedState.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        ) : (
          <div className='h-screen'></div>
        )
      }
    />
  );
};

export default PrivateRoute;
