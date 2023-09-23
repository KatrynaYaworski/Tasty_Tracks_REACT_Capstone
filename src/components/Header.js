import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import styles from "./Header.module.css";
import logo from "../images/calories-calculator.png";
import Modal from "./Modal/Modal";
import AuthContext from "../store/authContext";
import Login from "./Login/Login";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const nav = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header>
      <div className={styles.logo_container}>
        <Link to="/">
          <img
            referrerPolicy="no-referrer"
            src={logo}
            style={{ height: "80px", width: "80px" }}
            alt=""
          />
        </Link>
        <div>Tasty Tracks</div>
      </div>
      <nav className={styles.nav}>
        <Link to="/"><button className={styles.nav_btn}>Home</button></Link>
        <Link to="/Meal Planner">
          <button className={styles.nav_btn}>Meal Planner</button>
        </Link>
        <Link to="/RecipePage">
          <button className={styles.nav_btn}>Recipes</button>
        </Link>
        { state.token ? 
          <button className={styles.nav_btn} onClick={() => {
            dispatch({type: 'LOGOUT'})
            nav('/');
          }}>Logout</button> :
          <button onClick={openModal} className={styles.nav_btn}> Login</button>
        }
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Login isOpen={isModalOpen} closeModal={closeModal}/>
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
