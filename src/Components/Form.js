import React from "react";
const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <br />
      <input type="text" name="country" placeholder="Country..." />
      <br />
      <button type="submit"> Get Weather </button>
    </form>
  );
};

export default Form;
