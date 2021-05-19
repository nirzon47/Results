import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Marks from './components/pages/Marks';
import Leaderboards from "./components/pages/Leaderboards";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/marks' exact component={Marks} />
        <Route path='/leaderboards' exact component={Leaderboards} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
