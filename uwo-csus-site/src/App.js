import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/JS/Home.js';
import About from './Pages/JS/About.js';
import Documents from './Documents';
import Navbar from './Components/JS/Navbar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
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
