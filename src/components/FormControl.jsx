import { useState } from "react";
import { Form } from "./Form.jsx";
import "../styles/FormControl.css";

export function FormControl({type, sendData}) {

    const [open, setOpen] = useState(false);

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <div className="form-control">
            <header>
                <h2>{type}</h2>
                <button onClick={clickHandler}>{open ? "Close" : "Open"}</button>
            </header>
            <Form type={type} isOpen={open} sendData={sendData}/>
        </div>
    );
}