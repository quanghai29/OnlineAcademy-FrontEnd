import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Another from './pages/Another';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import VerifyCode from './pages/VerifyCode';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/another">
          <Another />
        </Route>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/verify-code" component={VerifyCode}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
      </Switch>
    </Router>
  );
}

export default App;
