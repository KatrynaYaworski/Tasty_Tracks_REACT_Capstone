import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import AuthContext from "../../store/authContext";

const Login = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const { state, dispatch } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      username,
      password,
    };

    if(register && password !== confirmedPassword){
      setError("Passwords Do not match")
      return
    }
    axios
      .post(register ? "/register" : "/login", body)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
        closeModal();
      })
      .catch((err) => {
        console.error(err);
        register ? setError("Username not available") : setError("Username or Password is incorrect") 
      });

    console.log("submitHandler called");
  };
  // console.log({ state })
  return (
    <main>
      <div className={styles.login_header}>{register ? "Create an account" : "Sign in to Tasty Tracks"}</div>
      <form className={styles.auth_form} onSubmit={submitHandler}>
      <div className={styles.username_container}>
        <div className={styles.input_header}>Username</div>
        <input
          type="text"
          id="username"
          name="username"
          className={styles.form_input}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className={styles.password_container}>
         <div className={styles.input_header}>Password</div>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.form_input}
          onChange={(e) => {
            setPassword(e.target.value)
            setError('')
          }}
        />
        </div>
       {register ? <div className={styles.password_container}>
         <div className={styles.input_header}>Confirm Password</div>
        <input
          type="password"
          id="confirm password"
          name="confirm password"
          className={styles.form_input}
          onChange={(e) => {
            setConfirmedPassword(e.target.value)
            setError('')
          }}
        />
        </div> : '' }
        {error && <div style={{color:'red', marginBottom:'10px', marginTop: '-10px', fontSize:'small'}}>{error}</div>}
        <div className={styles.login_btn_container}>
        <button type="submit" className={styles.login_btn}>Login to your account</button>
        </div>
      </form>
      <div className={styles.auth_btn}>
      <span className={styles.login_or_register_text}>{register ? "Already have an account?" : "Not Registered?" }</span>
      <button className={styles.login_or_register_btn} onClick={() => {
        setRegister(!register)
        setError('')}}>
         {register ? "Login" : "Create an account"}
      </button>
      </div>
    </main>
  );
};

export default Login;
