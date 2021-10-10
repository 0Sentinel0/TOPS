import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Planner from './components/planner/planner';
import Home from './components/home/home';
import OnboarderForm from './components/forms/onboarderForm';
import Goals from './components/goals/goals';
import Activity from './components/activities/activities';

function App() {
  return (
    <>
      <Navbar />
      <main className="container-md ps-3 ps-lg-5">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Planner" component={Planner} />
            <Route path="/Onboarder" component={OnboarderForm} />
            <Route path="/Goals" component={Goals} />
            <Route path="/Activities" component={Activity} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;