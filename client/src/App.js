import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import "./components/BuildQuiz"
import BuildQuiz from './components/BuildQuiz';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/buildquestiontest' component = {BuildQuiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
