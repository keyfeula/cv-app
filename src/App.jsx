import { useState } from "react";
import { GeneralInfo } from "./components/GeneralInfo";
import { EducationInfo } from "./components/EducationInfo";
import { WorkExperience } from "./components/WorkExperience";
import { Resume } from "./components/Resume";
import "./App.css";


function App() {

  return (
    <>
      <section className="controls">
        <GeneralInfo />
        <EducationInfo />
        <WorkExperience />
      </section>
      <section className="display">
        <Resume />
      </section>
    </>
  )
}

export default App
