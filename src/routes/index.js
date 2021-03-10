import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Signup, User, NotFound } from '../pages';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute path='/user' component={User} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
