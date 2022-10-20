import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import Loading from "../Loading/Loading";
type Props = {};

const Recipe = (props: Props) => {
  const { id } = useParams();
  const url = `http://localhost:3001/recipes/${id}`;
  const { data: recipe, error, isPending } = useFetch(url);
  return (
    <>
      <Loading isPending={isPending} error={error} />
      {recipe && (
        <div className="recipe container bg-[#fff] text-black">
          <h2>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing: string) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </>
  );
};

export default Recipe;
