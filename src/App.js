import "./App.css";
import InputShortener from "./InputShortener";
import BackgroundAnimate from "./BackgroundAnimate";
import Linkresult from "./Linkresult";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <Linkresult inputValue={inputValue} />
    </div>
  );
}

export default App;
