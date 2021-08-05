import MainNavigation from './MainNavigation';
import Footer from './Footer';

function Layout({ children}) {
  return (
    <div>
      <MainNavigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
