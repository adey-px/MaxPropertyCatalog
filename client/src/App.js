import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavbar from "./commons/navbar/MainNavbar";
import UsersList from "./users/pages/UsersList";
import ViewPlace from "./places/pages/ViewPlace";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import AuthsUser from "./users/pages/AuthsUser";
import { AuthsContext } from "./contextApi/AuthsContext";

const App = () => {
  //
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
        <Route exact path="/" component={UsersList} />
        <Route exact path="/user-places/:uid" component={ViewPlace} />
        <Route exact path="/new-place" component={NewPlace} />
        <Route exact path="/update-place/:pid" component={UpdatePlace} />
        <Route exact path="/auth-User" component={AuthsUser} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Redirect to="/" />
        <Route exact path="/" component={UsersList} />
        <Route exact path="/user-places/:uid" component={ViewPlace} />
        <Route exact path="/auth-User" component={AuthsUser} />
      </React.Fragment>
    );
  }

  return (
    // Wrap all routes with authsContext from contextapi
    <AuthsContext.Provider
      value={{
        loggedIn: loggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavbar />

        <main>
          <Switch>{routes}</Switch>
        </main>
      </Router>
    </AuthsContext.Provider>
  );
};

export default App;
