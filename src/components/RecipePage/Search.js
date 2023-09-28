import React from "react";
import styles from "./Recipe.module.css"

const Search = ({searchRecipe, setSearchRecipe}) => {
    return(
        <div>
      <span className={styles.search_container_wrapper}>
        <div className={styles.search_container}>
          <input
            className={styles.search_input}
            type="text"
            value={searchRecipe}
            onChange={(e) => setSearchRecipe(e.target.value)}
            placeholder="Search for a Recipe"
          />
          <button className={styles.search_icon}>
            <i
              className="fa-solid fa-magnifying-glass fa-xl"
              style={{ color: "#3a8686" }}
            ></i>
          </button>
        </div>
        <button
          className={styles.filter_btn}
          onClick={() => setSearchRecipe("")}
        >
          <i
            className="fa-solid fa-filter-circle-xmark"
            style={{ color: "#ffffff", fontSize:"25px" }}
          ></i>
        </button>
      </span>
        </div>
    )
}
export default Search