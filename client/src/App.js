import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import BuildQuiz from './components/BuildQuiz';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/buildQuiz' component = {BuildQuiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
