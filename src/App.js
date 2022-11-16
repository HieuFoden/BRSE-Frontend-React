import './App.scss';
import Nav from './components/Navigations/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/news">
            new
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/" exact>
            home
          </Route>
          <Route path="*">
            <b>404 Not Found</b>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
