import { useState } from "react"
import "../styles/CVControl.css"

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
            <div className="cv-control">
                <h2>{props.name}</h2>
                <button onClick={handleButtonClick}>{open ? "Close" : "Open"}</button>
            </div>
            <div>{open ? <p>Open</p> : null}</div>
        </div>
    )
}