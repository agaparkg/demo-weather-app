import React from "react";
import FormSubmit from "./FormSubmit";

function AsideLeft() {
  const handleSearch = () => {};

  return (
    <aside id="left-side">
      <h3 className="aside-h3">City Name</h3>
      <input
        onChange={handleSearch}
        id="search"
        type="text"
        placeholder="Enter city..."
      />
      <FormSubmit />
    </aside>
  );
}

export default AsideLeft;
