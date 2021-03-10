import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Login, Signup, User } from '../pages';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute path='/user' component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
