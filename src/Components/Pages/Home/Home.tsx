import React from "react";
import { useFetch } from "../../../Hooks/useFetch";
import RecipeList from "../../RecipeList/RecipeList";
import Recipe from "../Recipe/Recipe";
import Loading from "../Loading/Loading";

type Props = {};

const Home = (props: Props) => {
  const { data, isPending, error } = useFetch("http://localhost:3001/recipes");
  return (
    <div className="Home">
      <Loading isPending={isPending} error={error} />
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
