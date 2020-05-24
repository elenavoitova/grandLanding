import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Var2 from './pages/Var2';
import Var3 from './pages/Var3';
import Var4 from './pages/Var4';
import Var5 from './pages/Var5';
import Var6 from './pages/Var6';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact
            path="/"
            component={() => <Homepage />}
          />
          <Route exact
            path="/2"
            component={() => <Var2 />}
          />
          <Route exact
            path="/3"
            component={() => <Var3 />}
          />
          <Route exact
            path="/4"
            component={() => <Var4 />}
          />
          <Route exact
            path="/5"
            component={() => <Var5 />}
          />
          <Route exact
            path="/6"
            component={() => <Var6 />}
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
