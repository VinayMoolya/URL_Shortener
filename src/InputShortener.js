import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const clickHandler = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div className="inputField">
        <input
          value={value}
          type="text"
          placeholder="Paste a Valid URL to shorten it.."
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="shorten" onClick={clickHandler}>
          Shorten
        </button>
      </div>
    </div>
  );
};

export default InputShortener;
