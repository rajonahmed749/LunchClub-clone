import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/shared/Login/Login';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>          
        </Switch>
      </Router>
  );
}

export default App;
