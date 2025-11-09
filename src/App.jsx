import { useState } from "react";
import { FormControl } from "./components/FormControl.jsx";
import { Resume } from "./components/Resume.jsx";
import "./App.css";


function App() {

  const [generalData, setGeneralData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [workData, setWorkData] = useState({});

  return (
    <>
      <section className="controls">
        <FormControl type="General Information" sendData={setGeneralData}/>
        <FormControl type="Education" sendData={setEducationData} />
        <FormControl type="Work Experience" sendData={setWorkData} />
      </section>
      <section className="display">
        <Resume 
          generalData={generalData}
          educationData={educationData}
          workData={workData}
        />
      </section>
    </>
  )
}

export default App
