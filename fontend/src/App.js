import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Another from './pages/Another';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import VerifyCode from './pages/VerifyCode';
import ForgotPassword from './pages/ForgotPassword';
import CourseOverview from './pages/CourseOverview';
import HomeLecturer from './pages/Lecturer/Home';

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
        <Route path="/log-in" component={LogIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/verify-code" component={VerifyCode}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
        <Route path="/lecturer" component={HomeLecturer} />
        <Route path="/course-overview">
          <CourseOverview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
