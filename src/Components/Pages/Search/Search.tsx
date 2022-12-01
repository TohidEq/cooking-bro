import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import RecipeList from "../../RecipeList/RecipeList";
import Loading from "../Loading/Loading";

type Props = {};

const Search = (props: Props) => {
  //The location.search property is a string that contains an initial ? followed by the key=value pairs in the query string. If there are no parameters, this value may be the empty string (i.e. '').
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3001/recipes?q=" + query;

  const { error, data, isPending } = useFetch(url);
  return (
    <>
      <h2 className="page-title">Recipe including "{query}"</h2>
      <Loading isPending={isPending} error={error} />
      {data && <RecipeList recipes={data} />}
    </>
  );
};

export default Search;
