// libs
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// routes
import ROUTES from '../../utils/routes';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.length <= 1) {
      navigate(ROUTES.ABOUT);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}