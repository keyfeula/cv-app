import { useState } from "react";
import { Form } from "./Form.jsx";
import "../styles/GeneralInfo.css";

export function GeneralInfo(props) {

    const [open, setOpen] = useState(false);

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <div className="general-info">
            <header>
                <h2>General Information</h2>
                <button onClick={clickHandler}>{open ? "Close" : "Open"}</button>
            </header>
            <Form type="general" isOpen={open}/>
        </div>
    );
}