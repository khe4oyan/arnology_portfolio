// libs
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// routes
import ROUTES from './utils/routes';

// styles 
import './css/general.css';

export default function App() {
  const {isDarkTheme} = useSelector(s => s.theme);

  return (
    <div className={isDarkTheme ? "darkTheme":"lightTheme"}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}>
          <Route path={ROUTES.ABOUT} element={<AboutPage />}/>
          <Route path={ROUTES.PROJECTS} element={<ProjectsPage />}/>
          <Route path={ROUTES.CONTACT} element={<ContactPage />}/>
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}
