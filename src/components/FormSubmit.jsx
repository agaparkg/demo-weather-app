import React from "react";

function FormSubmit() {
  return (
    <form>
      <input type="radio" id="fahrenheit" name="degree" />{" "}
      <label htmlFor="fahrenheit">Fahrenheit</label>
      <br />
      <input type="radio" id="celsius" name="degree" />{" "}
      <label htmlFor="celsius">Celsius</label>
      <br />
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
}

export default FormSubmit;
