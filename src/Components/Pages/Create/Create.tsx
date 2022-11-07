import React, { useRef } from "react";

type Props = {};

const Create = (props: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const methodRef = useRef<HTMLTextAreaElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const ingredientsRef = useRef<HTMLInputElement>(null);
  return (
    <div className="create">
      <h2 className="page-title">Create new Recipe</h2>

      <form
        action=""
        onSubmit={() => {
          console.log(11111);
        }}
      >
        <label htmlFor="">
          <span>Recipe Title:</span>
          <input ref={titleRef} className="input" type="text" required />
        </label>

        {/* ingredients go here */}
        <label htmlFor="">
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input ref={ingredientsRef} type="text" className="input" />
            <button className="btn">add</button>
          </div>
          <ul>
            Current ingredients: <li>test</li> <li>test2</li>
          </ul>
        </label>

        <label htmlFor="">
          <span>Recipe Method:</span>
          <textarea ref={methodRef} className="input" required></textarea>
        </label>

        <label htmlFor="">
          <span>Cooking Time (minutes):</span>
          <input ref={timeRef} className="input" type="number" required />
        </label>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
