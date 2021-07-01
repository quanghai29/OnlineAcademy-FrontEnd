import { Link } from 'react-router-dom';

function MainNavigation() {

  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/another'>Another</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;