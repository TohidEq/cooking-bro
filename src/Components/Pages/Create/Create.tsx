import React from "react";

type Props = {};

const Create = (props: Props) => {
  return (
    <div className="create">
      <h2 className="page-title">Create new Recipe</h2>

      <form action="">
        <label htmlFor="">
          <span>Recipe Title:</span>
          <input className="input" type="text" required />
        </label>

        {/* ingredients go here */}

        <label htmlFor="">
          <span>Recipe Method:</span>
          <textarea className="input" required></textarea>
        </label>

        <label htmlFor="">
          <span>Cooking Time (minutes):</span>
          <input className="input" type="number" />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
