import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainNavbar from "./shared/navbar/MainNavbar";
import UserPage from "./users/pages/UserPage";
import ViewPlace from "./places/pages/ViewPlace";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";


const App = () => {
  return (

    <Router>
      <MainNavbar />

      <main>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/new-place" component={NewPlace} />
          <Route exact path="/user-places/:uid" component={ViewPlace} />
          <Route exact path="/update-place/:pid" component={UpdatePlace} />
        </Switch>
      </main>
      
    </Router>

  ); 
}

export default App;