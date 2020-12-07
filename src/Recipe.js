import React from "react";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipy">
      <h1 className="title">{title}</h1>
      <ul className="steps">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Total {calories} Calories</p>
      <img src={image} alt="" className="images" />
    </div>
  );
};
export default Recipe;
