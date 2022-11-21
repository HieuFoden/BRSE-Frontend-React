import './App.scss';
// import Nav from './components/Navigations/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
    </Router>
  );
}

export default App;
