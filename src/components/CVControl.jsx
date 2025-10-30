import { useState } from "react";
import { Form } from "./Form";
import "../styles/CVControl.css";

export function CVControl(props) {
    const [open, setOpen] = useState(false);
    
    function handleButtonClick() {
        if (open) {
            setOpen(false);
        }
        else {
            setOpen(true);
        }
    }

    return (
        <div>
            <div className={`cv-control ${open ? "open" : "closed"}`}>
                <h2>{props.name}</h2>
                <button onClick={handleButtonClick}>{open ? "Close" : "Open"}</button>
            </div>
            {open ? <Form /> : null}
        </div>
    )
}