import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Sedule from './components/schedule/schedule';
import Home from './components/home/home';
import OrgForm from './components/forms/orgForm';

function App() {
  return (
    <>
      <Navbar />
      <main className="container-md ps-3 ps-lg-5">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Schedule" component={Sedule} />
            <Route path="/OrgInfo" component={OrgForm} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;