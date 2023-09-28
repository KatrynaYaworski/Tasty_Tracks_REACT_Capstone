import React from "react";
import styles from "./Recipe.module.css"
import AuthContext from "../../store/authContext";
import { useContext, useState } from "react";

const FilterUserRecipes = ({setUserRecipe, userRecipe, filter, setFilter}) =>{
    const { state, dispatch } = useContext(AuthContext);
    return(
        <div className={styles.filter_container}>
        <div className={styles.filter_radio_btns_container}>
          <input
          className={styles.user_filter_input}
            onChange={(e) => {
                setFilter(false)
                setUserRecipe(state.userId)}}
            type="radio"
            id="user"
            checked={userRecipe !== null}
            name="searchUserRecipe"
            value={state.userId}
          />
          <label className={styles.user_filter_label} htmlFor="user">My Recipes</label>
          <input
          className={styles.user_filter_input}
            onChange={(e) => {
                setUserRecipe(null)
                setFilter(true)}}
            type="radio"
            id="all"
            checked={userRecipe === null}
            name="searchUserRecipe"
            value={state.userId}
          />
          <label
          className={styles.user_filter_label}
          htmlFor="all">All Recipes</label>
        </div>
      </div>
    )
}

export default FilterUserRecipes