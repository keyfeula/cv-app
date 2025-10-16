import { useState } from "react"
import "./App.css"
import { CVControl } from "./components/CVControl"
import { CVDisplay } from "./components/CVDisplay"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section className="controls">
          <CVControl />
          <CVControl />
          <CVControl />
        </section>
        <section className="cv-display">
          <CVDisplay />
        </section>
      </main>
    </>
  )
}

export default App
