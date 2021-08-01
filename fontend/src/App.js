import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import VerifyCode from './pages/VerifyCode';
import ForgotPassword from './pages/ForgotPassword';
import CourseOverview from './pages/CourseOverview';
import HomeLecturer from './pages/Lecturer/Home';
import UpdateCourse from './pages/Lecturer/UpdateCourse';
import Learning from './pages/Learning';
import SearchCourseResult from './pages/SearchCourseResult';
import UpdateProfile from './pages/User/UpdateProfile';
import Login from './pages/LogIn';
import AdminCategory from './pages/AdminCategory';

function App() {
  //test otpToken first
  localStorage.setItem('otpToken', '123456');
  
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
        <Route path="/update-profile" component={UpdateProfile} />
        <Route path="/search-result" component={SearchCourseResult}/>
        <Route path="/admin/category" component={AdminCategory}/>
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
