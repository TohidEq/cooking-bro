import React from "react";
import { Link } from "react-router-dom";

type Props = { recipe: data };

type data = {
  id: number;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
};

const RecipeCard = (props: Props) => {
  const { id, title, method, cookingTime } = props.recipe;
  return (
    <div className="recipe-card" key={id}>
      <div>
        <h3>{title}</h3>
        <p>{cookingTime} to make.</p>
      </div>

      <div className="card-method">{method.substring(0, 100)}...</div>
      <Link to={"/recipes/" + id}>Cook this</Link>
    </div>
  );
};

export default RecipeCard;
