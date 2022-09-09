import React, {useState, useCallback} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import MainNavbar from "./shared/navbar/MainNavbar";
import UserPage from "./users/pages/UserPage";
import ViewPlace from "./places/pages/ViewPlace";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import AuthUser from "./users/pages/AuthUser";
import { AuthContext } from "./shared/contextapi/authContext";


const App = () => {

  // State hooks for authContext below, to navLinks comp
  const [loggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, []);


  // Redirect users to selected routes 
  let routes;

  if (loggedIn) {
    routes = (
      <React.Fragment>
        <Redirect to="/" />,
        <Route exact path="/" component={UserPage} />
        <Route exact path="/user-places/:uid" component={ViewPlace} />
        <Route exact path="/new-place" component={NewPlace} />
        <Route exact path="/update-place/:pid" component={UpdatePlace} />
        <Route exact path="/authUser" component={AuthUser} />
      </React.Fragment> 
    );
  } else {
    routes = (
      <React.Fragment>
        <Redirect to="/authUser" />
        <Route exact path="/" component={UserPage} />
        <Route exact path="/user-places/:uid" component={ViewPlace} />
        <Route exact path="/authUser" component={AuthUser} />
      </React.Fragment>
    );
  }

  return (

    // Wrap all routes with authContext from contextapi
    <AuthContext.Provider value={{
        loggedIn: loggedIn,
        login:login,
        logout: logout
      }}
    >
      <Router>
        <MainNavbar />

        <main>
          <Switch>{routes}</Switch>
        </main>
        
      </Router>
    </AuthContext.Provider>

  ); 
}

export default App;