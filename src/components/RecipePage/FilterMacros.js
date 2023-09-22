import React from "react";
import styles from "./Recipe.module.css"

const FilterMacros = ({setSearchMacro, searchMacro, setDirection, direction}) => {
    return (
        <div className={styles.filter_macros_container}>
            <div className={styles.filter_container}>
          <div className={styles.filter_radio_btns_container}>
            <input
              className={styles.input_macros}
              onChange={(e) => setSearchMacro(e.target.value)}
              type="radio"
              id="calories"
              checked={searchMacro === "calories"}
              name="searchMacro"
              value="calories"
            />
            <label htmlFor="calories">Calories</label>
            <input
              className={styles.input_macros}
              onChange={(e) => setSearchMacro(e.target.value)}
              type="radio"
              id="carbs"
              checked={searchMacro === "carbs"}
              name="searchMacro"
              value="carbs"
            />
            <label htmlFor="carbs">Carbs</label>
            <input
              className={styles.input_macros}
              onChange={(e) => setSearchMacro(e.target.value)}
              type="radio"
              id="protein"
              checked={searchMacro === "protein"}
              name="searchMacro"
              value="protein"
            />
            <label htmlFor="protein">Protein</label>
            <input
              className={styles.input_macros}
              onChange={(e) => setSearchMacro(e.target.value)}
              type="radio"
              id="fat"
              checked={searchMacro === "fat"}
              name="searchMacro"
              value="fat"
            />
            <label htmlFor="fat">Fat</label>
            <div className={styles.sort_btn_container}>
              <input
                className={styles.sort_button}
                onChange={() => setDirection("ascending")}
                type="radio"
                id="ascending"
                checked={direction === "ascending"}
                name="setDirectionAscending"
                value="ascending"
              />
              <label id={styles.sort_label} htmlFor="ascending">
                <i
                  className="fa-solid fa-sort-up fa-bounce"
                  style={{ color: "#ffffff" }}
                ></i>
              </label>

              <input
                className={styles.sort_button}
                onChange={() => setDirection("descending")}
                type="radio"
                id="descending"
                checked={direction === "descending"}
                name="setDirectionDescending"
                value="descending"
              />
              <label id={styles.sort_label} htmlFor="descending">
                <i
                  className="fa-solid fa-sort-down fa-bounce"
                  id={styles.search_icon}
                  style={{ color: "#ffffff" }}
                ></i>
              </label>
            </div>

            <button
              className={styles.filter_btn}
              onClick={() => {
                setSearchMacro("");
                setDirection("ascending");
              }}
            >
              <i
                className="fa-solid fa-filter-circle-xmark"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </div>
        
        </div>
    )
}

export default FilterMacros