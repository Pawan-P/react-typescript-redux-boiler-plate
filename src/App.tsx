import React from 'react';
import './App.css';
import history from './history';
import { Provider } from 'react-redux';
import { store } from './Libraries/redux/store';
import { NavLink, Route, Router, Switch } from 'react-router-dom';
import { APP_ROUTES } from './Libraries/networking/AppRoutes';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <header className='App-Header'>
              {/* <button>
                <NavLink to={APP_ROUTES.home}>
                  TAKE ME HOME
                </NavLink>
              </button> */}
              
            
              <Route 
                exact
                path={APP_ROUTES.home}
                component={Home}
              />
            </header>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
