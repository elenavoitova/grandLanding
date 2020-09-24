import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact
            path="/"
            component={() => <Homepage />}
          />
          <Route exact
            path="/pre"
            component={() => <Preloader />}
          />
          {/* <Route 
          path="/404"
          component={() => <NotFound />}
          />
          <Redirect to="/404"/> */}
      </Switch>
    </div>

  );
}

export default App;
