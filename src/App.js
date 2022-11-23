import './App.scss';
import Nav from './components/Navigations/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import _ from 'lodash';


function App() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return (
    <>
      <Router>
        <div className='app-container'>

          {account && !_.isEmpty(account) && account.isAuthenticated && <Nav />  // co account va account khong rong va dieu kien Authenticated = true thi xuat hien thanh nav
          }

          <Switch>

            <Route path="/news">
              new
            </Route>
            <Route path="/about">
              about
            </Route>
            <Route path="/contact">
              contact
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
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
    </>
  );
}

export default App;
