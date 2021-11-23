import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Documents from './Documents';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/About'>
            <About/>
          </Route>

          <Route exact path='/Documents'>
            <Documents/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
