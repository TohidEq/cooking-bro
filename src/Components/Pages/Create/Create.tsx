import { link } from "fs";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

type Props = {};

const Create = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");

  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientsInput = useRef<HTMLInputElement>(null);
  const [newIngredient, setNewIngredient] = useState<string>("");

  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  const { postData, error, data } = useFetch(
    "http://localhost:3001/recipes",
    "POST"
  );

  const [emptyIngredients, setEmptyIngredients] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (ingredients.length > 0) {
      postData({
        title,
        ingredients,
        method,
        cookingTime: cookingTime + " minutes",
      });
    } else {
      setEmptyIngredients(true);
    }
  };

  // redirect user when we get data response:
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  const handleAdd = (e: any) => {
    e.preventDefault();
    const ing = newIngredient?.trim();
    if (ing && !ingredients?.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients!, ing]);
    }
    setNewIngredient("");
    ingredientsInput.current?.focus();
    setIsRemoved(false);
  };

  const removeAllIngredient = () => {
    setIngredients([]);
    setIsRemoved(true);
  };

  return (
    <div className="create">
      <h2 className="page-title">Create new Recipe</h2>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Recipe Title:</span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="input"
            type="text"
            required
          />
        </label>

        {/* ingredients go here */}
        <label htmlFor="">
          <span>
            Recipe ingredients
            {emptyIngredients && <span> (pls input someshits) </span>}:
          </span>
          <div className="ingredients">
            <input
              onChange={(e) => {
                setNewIngredient(e.target.value);
                setEmptyIngredients(false);
              }}
              value={newIngredient}
              ref={ingredientsInput}
              type="text"
              className="input"
            />
            <button className="btn" onClick={handleAdd}>
              add
            </button>
          </div>
          <ul>
            Current ingredients:
            {ingredients.length ? (
              ingredients?.map((i) => <li>{i}</li>)
            ) : (
              <li>{isRemoved ? "clear :)" : "nothing"}</li>
            )}
          </ul>
          {ingredients.length > 0 && (
            <div className="clear-btn" onClick={removeAllIngredient}>
              remove all
            </div>
          )}
        </label>

        <label htmlFor="">
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            className="input"
            required
          ></textarea>
        </label>

        <label htmlFor="">
          <span>Cooking Time (minutes):</span>
          <input
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            className="input"
            type="number"
            required
          />
        </label>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
