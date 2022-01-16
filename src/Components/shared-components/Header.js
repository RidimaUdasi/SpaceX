import * as React from 'react';
import styles from "../../Styles/Header.module.css";
import logo from "../../Images/spacex.png";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <React.Fragment>
      <div className={styles.headerMainDiv}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="SpaceX"/>
        </Link>
        <ul className={styles.headerTextList}>
          <li>
            <Link className={styles.headerText} to="/launches/upcoming">UPCOMING LAUNCHES</Link>
          </li>
          <li>
            <Link className={styles.headerText} to="/launches/latest">LATEST LAUNCHES</Link>
          </li>
          <li>
            <Link className={styles.headerText} to="/launches/past">PAST LAUNCHES</Link>
          </li>
        </ul>  
      </div>
    </React.Fragment>
  )
}

export default Header;
