import React from "react";
import { useFetch } from "../../../Hooks/useFetch";
import Recipe from "../Recipe/Recipe";

type Props = {};

const Home = (props: Props) => {
  const { data, isPending, error } = useFetch("http://localhost:3001/recipes");
  return (
    <div className="Home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="ispending">Loading...</p>}
      {data && data.map((recipe: any) => <h2>{recipe.title}</h2>)}
    </div>
  );
};

export default Home;
