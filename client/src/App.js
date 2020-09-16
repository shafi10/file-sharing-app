import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Fromdata from './components/Formdata'
import Download from './components/Download'

function App() {
  return (
    <div className="container app">
      <Router>
     <div className="bg-primary text-center text-dark p-5 mt-2">
       <h3>File Shareing system</h3>
     </div>
      <Switch>
          <Route exact path='/' component={Fromdata} />
          <Route exact path='/files/:uuid' component={Download} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
