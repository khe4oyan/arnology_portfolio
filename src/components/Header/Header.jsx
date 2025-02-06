// libs
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// store
import { toggleTheme } from "../../store/slices/themeSlice";

// routes
import ROUTES from "../../utils/routes";

// styles
import classes from "./styles.module.css";

export default function Header() {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((s) => s.theme);
  const [isOpenBurger, setIsOpenBurger] = useState(false); 

  const links = [
    { title: "About", to: ROUTES.ABOUT },
    { title: "Projets", to: ROUTES.PROJECTS },
    { title: "Contact", to: ROUTES.CONTACT },
  ];

  const toggleThemeButton = () => {
    dispatch(toggleTheme());
  };

  const toggleBurgerButton = () => {
    setIsOpenBurger(prev => !prev);
  }

  return (
    <div className={classes.root}>
      <div className={`container ${classes.container}`}>
        <div>
          <h1>Portfolio</h1>
        </div>

        {/* links for PC version */}
        <div className={classes.links_PC}>
          <Links 
            links={links}
            toggleThemeButton={toggleThemeButton}
            isDarkTheme={isDarkTheme}
          />
        </div>

        {/* links for mobile version */}
        <div className={classes.links_mobile}>
          <button className={`${classes.burger} ${isOpenBurger && classes.active}`} onClick={toggleBurgerButton}>
            <div className={classes.burgerLine}></div>
            <div className={classes.burgerLine}></div>
          </button>

            <div className={classes.links}>
              <Links
                onClick={toggleBurgerButton}
                links={links}
                toggleThemeButton={toggleThemeButton}
                isDarkTheme={isDarkTheme}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

function Links({ links, toggleThemeButton, isDarkTheme, onClick }) {
  return (
    <>
      {links.map((link, ind) => (
        <Link className={classes.link} to={link.to} key={ind} onClick={onClick}>
          {link.title}
        </Link>
      ))}
      <button onClick={toggleThemeButton}>
        {isDarkTheme ? "Dark" : "Light"} theme
      </button>
    </>
  );
}
