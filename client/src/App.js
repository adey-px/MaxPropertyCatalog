import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainNavbar from "./shared/navbar/MainNavbar";
import UserPage from "./users/pages/UserPage";
import PlacePage from "./places/pages/PlacePage";


const App = () => {
  return (

    <Router>
      <MainNavbar />

      <main>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/:uid/user-places" component={PlacePage} />
        </Switch>
      </main>
      
    </Router>

  ); 
}

export default App;