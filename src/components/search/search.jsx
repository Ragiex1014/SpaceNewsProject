import React, { useState } from "react";

const Search = ({ handleSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          return handleSubmit(value);
        }}
      >
        <input
          type="text"
          value={value}
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
