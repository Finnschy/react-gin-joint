import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Entertainment from "./components/Entertainment"
import Shop from "./components/Shop"
import Events from "./components/Events"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/shop" component={Shop} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
