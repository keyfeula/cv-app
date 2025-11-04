import { useState } from "react";
import "../styles/GeneralInfo.css";

export function WorkExperience(props) {

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(
        {
            name: "", 
            title: "", 
            responsibilities: "",
            startDate: "",
            endDate: ""
        });

    function clickHandler() {
        setOpen(!open);
    }

    function inputHandler(event) {
        switch (event.target.id) {
            case "name":
                setFormData({...formData, name: event.target.value});
                break;
            case "title":
                setFormData({...formData, title: event.target.value});
                break;
            case "responsibilities":
                setFormData({...formData, responsibilities: event.target.value});
                break;
            case "startDate":
                setFormData({...formData, startDate: event.target.value});
                break;
            case "endDate":
                setFormData({...formData, endDate: event.target.value});
                break;
        }
    }

    return (
        <div className="general-info">
            <header>
                <h2>Work Experience</h2>
                <button onClick={clickHandler}>{open ? "Close" : "Open"}</button>
            </header>
            {open ? (
                <form action="">
                <div className="form-field">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" id="name" value={formData.name} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="title">Position Title</label>
                    <input type="text" id="title" value={formData.title} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input type="text" id="responsibilities" value={formData.responsibilities} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="graduation">Start Date</label>
                    <input type="date" id="startDate" value={formData.startDate} onChange={inputHandler}/>
                </div>
                <div className="form-field">
                    <label htmlFor="graduation">End Date</label>
                    <input type="date" id="endDate" value={formData.endDate} onChange={inputHandler}/>
                </div>
            </form>
            ) : null}
        </div>
    );
}