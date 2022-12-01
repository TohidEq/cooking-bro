import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import Recipe from '../Pages/Recipe/Recipe';

type Props = { recipes: data[] };

type data = {
  id: number;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
};

const RecipeList = (props: Props) => {
  if (props.recipes.length === 0) {
    return (<div className="error">
      No Recipe to load...
    </div>);
  }
  return (
    <div className="recipe-list">
      {props.recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
