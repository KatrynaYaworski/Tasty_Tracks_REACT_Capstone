import React from "react";
import styles from "./Recipe.module.css"

const FilterMealTypes = ({searchType, setSearchType}) => {
    return(
        <div className={styles.filter_container}>
          <div className={styles.filter_radio_btns_container}>
            <input
              onChange={(e) => setSearchType(e.target.value)}
              type="radio"
              id="breakfast"
              checked={searchType === "breakfast"}
              name="searchType"
              value="breakfast"
            />
            <label htmlFor="breakfast">Breakfast</label>
            <input
              onChange={(e) => setSearchType(e.target.value)}
              type="radio"
              id="snacks"
              checked={searchType === "snacks"}
              name="searchType"
              value="snacks"
            />
            <label htmlFor="snacks">Snacks/Extras</label>
            <input
              onChange={(e) => setSearchType(e.target.value)}
              type="radio"
              id="lunch/dinner"
              checked={searchType === "lunch/dinner"}
              name="searchType"
              value="lunch/dinner"
            />
            <label htmlFor="lunch/dinner">Lunch/Dinner</label>
            <button
              className={styles.filter_btn}
              onClick={() => setSearchType("")}
            >
              <i
                className="fa-solid fa-filter-circle-xmark"
                style={{ color: "#ffffff", fontSize:"20px" }}
              ></i>
            </button>
          </div>
        </div>
    )

}

export default FilterMealTypes