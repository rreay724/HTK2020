import {
  Header,
  Map,
  SignUp,
  Training,
  Gear,
  Home,
  Info,
} from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signup">
              <Header />
              <SignUp />
            </Route>
            <Route path="/map">
              <Header />
              <Map />
            </Route>
            <Route path="/training">
              <Header />
              <Training />
            </Route>
            <Route path="/gear">
              <Header />
              <Gear />
            </Route>
            <Route path="/info">
              <Header />
              <Info />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
