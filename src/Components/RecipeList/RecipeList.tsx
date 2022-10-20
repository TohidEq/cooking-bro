import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

type Props = { recipes: data[] };

type data = {
  id: number;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
};

const RecipeList = (props: Props) => {
  return (
    <div className="recipe-list">
      {props.recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
