import { useState } from "react";
import "../styles/GeneralInfo.css";

export function GeneralInfo(props) {

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
            case "email":
                setFormData({...formData, email: event.target.value});
                break;
            case "phone":
                setFormData({...formData, phoneNum: event.target.value});
                break;
        }
    }

    return (
        <div className="general-info">
            <header>
                <h2>General Information</h2>
                <button onClick={clickHandler}>{open ? "Close" : "Open"}</button>
            </header>
            {open ? (
                <form action="">
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={formData.name} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" value={formData.phoneNum} onChange={inputHandler}/>
                </div>
            </form>
            ) : null}
        </div>
    );
}