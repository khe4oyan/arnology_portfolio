// libs
import { Link } from 'react-router-dom';

// routes
import ROUTES from '../../utils/routes';

// styles
import classes from './styles.module.css';

export default function Header() {
  const links = [
    {title: "About", to: ROUTES.ABOUT},
    {title: "Projets", to: ROUTES.PROJECTS},
    {title: "Contact", to: ROUTES.CONTACT},
  ];

  const toggleTheme = () => {
    // TODO: toggle theme
  };

  return (
    <div className={classes.root}>
      <div className={`container ${classes.container}`}>
        <div>
          <h1>Portfolio</h1>
        </div>
        <div className={classes.links}>
          {links.map((link, ind) =>
            <Link className={classes.link} to={link.to} key={ind}>{link.title}</Link>
          )}

          <button onClick={toggleTheme}>dark theme</button>
        </div>
      </div>
    </div>
  )
}