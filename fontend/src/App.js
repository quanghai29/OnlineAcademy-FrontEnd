import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Signup from './pages/TempSignup';
import VerifyCode from './pages/VerifyCode';
import ForgotPassword from './pages/ForgotPassword';
import CourseOverview from './pages/CourseOverview';
import HomeLecturer from './pages/Lecturer/Home';
import UpdateCourse from './pages/Lecturer/UpdateCourse';
import Learning from './pages/Learning';
import SearchCourseResult from './pages/SearchCourseResult';
import UpdateProfile from './pages/User/UpdateProfile';
import Login from './pages/TempLogin';
import AdminCategory from './pages/AdminCategory';
import AdminStudent from './pages/AdminStudent';
import AdminLecturer from './pages/AdminLecturer';
import CourseCategory from './pages/CourseCategory';
import StudentCourseRegister from './pages/StudentCourseRegister';
import StudentCourseWatchlist from './pages/StudentCourseWatchlist';

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
        <Route path="/update-profile" component={UpdateProfile} />
        <Route path="/search-result" component={SearchCourseResult}/>
        <Route path="/admin/category" component={AdminCategory}/>
        <Route path="/admin/student" component={AdminStudent}/>
        <Route path="/admin/lecturer" component={AdminLecturer}/>
        <Route path="/course-overview" component={CourseOverview}/>
        <Route path="/learning" component={Learning}/>
        <Route path="/course-of-category" component={CourseCategory}/>
        <Route path="/student-course-of-register" component={StudentCourseRegister}/>
        <Route path="/student-course-of-watchlist" component={StudentCourseWatchlist}/>
      </Switch>
    </Router>
  );
}

export default App;
