import React from "react";
import styles from "./Meals.module.css";

const MealDetails = ({
  selectedKey,
  index,
  setSelectedDays,
  selectedDays,
  recipes,
}) => {
  const onClickShit = (recipeId) => {
    const selectedDaysCopy = [...selectedDays];
    selectedDaysCopy[index][selectedKey] = recipeId;
    setSelectedDays(selectedDaysCopy);
  };
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          {recipes.map((r) => (
            <tr>
              <td onClick={() => onClickShit(r.recipe_id)}>{r.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealDetails;
