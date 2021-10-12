import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/index";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import GenerateQuizPage from './pages/GenerateQuizPage/GenerateQuizPage';
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = {DashboardPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/generate' component = {GenerateQuizPage} />
          <Route exact path="/profile" component = {ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
