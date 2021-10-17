import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Addform from "./components/Addform";
import Home from "./components/Home";
import User from './components/User';
import Individual from './components/Individual';

function App() {
  return (
      <>
      <Router>
      <Navbar/>
      <div>

        <Switch>
          <Route path="/user/aarav">
            <Individual name="/api/use/data/aarav" user="aarav" />
            </Route>
          <Route path="/user/dev">
            <Individual name="/api/use/data/dev" user="dev"/>
            </Route>
          <Route path="/user/hritik">
            <Individual name="/api/use/data/hritik" user="hritik" />
            </Route>
          <Route path="/user/komal">
            <Individual name="/api/use/data/komal" user="komal"/>
            </Route>
          <Route path="/user/meena">
            <Individual name="/api/use/data/meena" user="meena"/>
            </Route>
          <Route path="/user/nidhi">
            <Individual name="/api/use/data/nidhi" user="nidhi"/>
            </Route>
          <Route path="/user/rupin">
            <Individual name="/api/use/data/rupin" user="rupin"/>
            </Route>
          <Route path="/user/utkarsh">
            <Individual name="/api/use/data/utkarsh" user="utkarsh"/>
            </Route>
          <Route path="/user/vikram">
            <Individual name="/api/use/data/vikram" user="vikram"/>
            </Route>
          <Route path="/user/zohra">
            <Individual name="/api/use/data/zohra" user="zohra" />
            </Route>
          <Route path="/user">
            <Home />
          </Route>
          <Route path="/add">
            <Addform />
          </Route>
          <Route path="/">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
      </>
  );
}

export default App;
