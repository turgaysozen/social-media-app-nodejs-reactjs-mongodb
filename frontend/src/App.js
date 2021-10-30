import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login';
import Register from './pages/register/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const user = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Login />}
        </Route>
        <Route path='/profile/:username'>
          <Profile />
        </Route>
        <Route path='/login'>
          {user ? <Home /> : <Login />}
        </Route>
        <Route path='/register'>
          {user ? <Home /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
