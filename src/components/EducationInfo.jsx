import { useState } from "react";
import { Form } from "./Form.jsx";
import "../styles/GeneralInfo.css";

export function EducationInfo(props) {

    const [open, setOpen] = useState(false);

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <div className="general-info">
            <header>
                <h2>Education</h2>
                <button onClick={clickHandler}>{open ? "Close" : "Open"}</button>
            </header>
            <Form type="education" isOpen={open}/>
        </div>
    );
}