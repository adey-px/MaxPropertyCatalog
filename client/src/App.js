import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import UserPage from "./users/pages/UserPage";
import MainNavbar from "./shared/components/navbar/MainNavbar";


const App = () => {
  return (

    <Router>
      <MainNavbar />

      <main>
        <Switch>
          <Route exact path="/" component={UserPage} />
        </Switch>
      </main>
      
    </Router>

  ); 
}

export default App;