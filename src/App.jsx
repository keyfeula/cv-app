import { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section className="controls">
          <CVControl name="General Information"/>
          <CVControl name="Education"/>
          <CVControl name="Experience"/>
        </section>
        <section className="cv-display">
          <CVDisplay />
        </section>
      </main>
    </>
  )
}

export default App
