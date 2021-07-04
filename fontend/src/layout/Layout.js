import MainNavigation from './MainNavigation';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
