import { useState } from "react";
import { GeneralInfo } from "./components/GeneralInfo";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="controls">
        <GeneralInfo />
      </section>
      <section className="cv-display">
        Display
      </section>
    </>
  )
}

export default App
