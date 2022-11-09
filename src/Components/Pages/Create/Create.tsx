import { link } from "fs";
import React, { useRef } from "react";
import { useState } from "react";

type Props = {};

const Create = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");

  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientsInput = useRef<HTMLInputElement>(null);
  const [newIngredient, setNewIngredient] = useState<string>("");

  const [isRemoved, setIsRemoved] = useState<boolean>(false);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
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
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
              type="text"
              className="input"
              required
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
