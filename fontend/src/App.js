import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import AdminCourse from './pages/AdminCourse';
import Profile from './pages/Profile';


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
        {/* <PrivateLecturerRoute path="/lecturer">
          <HomeLecturer />
        </PrivateLecturerRoute>
        <PrivateLecturerRoute path="/update-course">
          <UpdateCourse />
        </PrivateLecturerRoute> */}
        <Route path="/lecturer" component={HomeLecturer} />
        <Route path="/update-course" component={UpdateCourse} />
        <Route path="/update-profile" component={UpdateProfile} />
        <Route path="/search-result" component={SearchCourseResult}/>
        <Route path="/admin-category" component={AdminCategory}/>
        <Route path="/admin-student" component={AdminStudent}/>
        <Route path="/admin-lecturer" component={AdminLecturer}/>
        <Route path ="/admin-course" component={AdminCourse}/>
        <Route path="/course-overview" component={CourseOverview}/>
        <Route path="/learning" component={Learning}/>
        <Route path="/course-of-category" component={CourseCategory}/>
        <Route path="/student-course-of-register" component={StudentCourseRegister}/>
        <Route path="/student-course-of-watchlist" component={StudentCourseWatchlist}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
  );
}

// function PrivateLecturerRoute({ children, ...rest }) {
//   const {role} = JSON.parse(localStorage.decodePayload);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         (localStorage.accessToken && +role === 2) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               // state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

export default App;
