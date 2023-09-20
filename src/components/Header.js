import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from "./Header.module.css"
import logo from '../images/calories-calculator.png'

const Header = () => {
    return (
      <header>
        <div className={styles.logo_container}>
        <Link to="/">
          <img referrerPolicy="no-referrer" src={logo} style={{ height: "80px", width: "80px" }} alt="" />
        </Link>
      <div>Tasty Tracks</div>
        </div>
        <nav className={styles.nav}>         
            <Link to="/">
              <button className={styles.nav_btn}>Meal Planner</button>
              </Link>
            <Link to="/RecipePage">
              <button className={styles.nav_btn}>Recipes</button>
              </Link>
            <Link to="/Auth">
              <button className={styles.nav_btn}>Login</button>
              </Link>
        </nav>
      </header>
    );
  };
  
  export default Header;