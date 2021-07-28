import { BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import VerifyCode from './pages/VerifyCode';
import ForgotPassword from './pages/ForgotPassword';
import CourseOverview from './pages/CourseOverview';
import HomeLecturer from './pages/Lecturer/Home';
import UpdateCourse from './pages/Lecturer/UpdateCourse';
import PreLoading from './components/PreLoading';
import Learning from './pages/Learning';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loading" component={PreLoading}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/verify-code" component={VerifyCode}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
        <Route path="/lecturer" component={HomeLecturer} />
        <Route path="/update-course" component={UpdateCourse} />
        <Route path="/course-overview">
          <CourseOverview course_id={1}/>
        </Route>
        <Route path="/learning">
          <Learning course_id={1}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
