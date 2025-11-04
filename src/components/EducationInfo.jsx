import { useState } from "react";
import "../styles/GeneralInfo.css";

export function EducationInfo(props) {

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({name: "", email: "", phoneNum: ""});

    function clickHandler() {
        setOpen(!open);
    }

    function inputHandler(event) {
        switch (event.target.id) {
            case "name":
                setFormData({...formData, name: event.target.value});
                break;
            case "field":
                setFormData({...formData, email: event.target.value});
                break;
            case "graduation":
                setFormData({...formData, phoneNum: event.target.value});
                break;
        }
    }

    return (
        <div className="general-info">
            <header>
                <h2>Education</h2>
                <button onClick={clickHandler}>{open ? "Close" : "Open"}</button>
            </header>
            {open ? (
                <form action="">
                <div className="form-field">
                    <label htmlFor="name">School Name</label>
                    <input type="text" id="name" value={formData.name} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="field">Field of Study</label>
                    <input type="text" id="field" value={formData.email} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="graduation">Graduation Date</label>
                    <input type="date" id="graduation" value={formData.phoneNum} onChange={inputHandler}/>
                </div>
            </form>
            ) : null}
        </div>
    );
}