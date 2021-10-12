import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BuildQuiz from './components/BuildQuiz';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/buildQuiz' component = {BuildQuiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
