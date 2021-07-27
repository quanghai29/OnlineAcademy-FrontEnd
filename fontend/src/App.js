import { BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyCode from './pages/VerifyCode';
import ForgotPassword from './pages/ForgotPassword';
import CourseOverview from './pages/CourseOverview';
import HomeLecturer from './pages/Lecturer/Home';
import UpdateCourse from './pages/Lecturer/UpdateCourse';
import SearchCourseResult from './pages/SearchCourseResult';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/verify-code" component={VerifyCode}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
        <Route path="/lecturer" component={HomeLecturer} />
        <Route path="/update-course" component={UpdateCourse} />
        <Route path="/search-result" component={SearchCourseResult}/>
        <Route path="/course-overview">
          <CourseOverview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
