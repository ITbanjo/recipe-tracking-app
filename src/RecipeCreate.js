import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const blankForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formValues, setFormValues] = useState({ ...blankForm });

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formValues]);
    setFormValues({ ...blankForm });
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="input-table">
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                value={formValues.name}
                placeholder="Name"
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                value={formValues.cuisine}
                placeholder="Cuisine"
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                name="photo"
                value={formValues.photo}
                placeholder="URL"
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <textarea
                name="ingredients"
                value={formValues.ingredients}
                placeholder="Ingredients"
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                value={formValues.preparation}
                placeholder="Preparation"
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
