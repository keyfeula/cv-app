import { useState } from "react";
import "../styles/Form.css";

export function Form({type, isOpen, sendData}) {

    const [generalData, setGeneralData] = useState({
        userName: "",
        email: "",
        phone: ""
    });

    const [educationData, setEducationData] = useState({
        schoolName: "",
        fieldOfStudy: "",
        graduationDate: ""
    });

    const [workData, setWorkData] = useState({
        companyName: "",
        title: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
    });

    if (!isOpen) {
        return null;
    }

    function inputOnChange(event) {
        if (event.target.id in generalData) {
            setGeneralData({...generalData, [event.target.id]: event.target.value});
        }
        else if (event.target.id in educationData) {
            setEducationData({...educationData, [event.target.id]: event.target.value});
        }
        else {
            setWorkData({...workData, [event.target.id]: event.target.value});
        }
    }

    function submitBtnHandler(event) {
        event.prevent
        const id = event.target.id;
        if (id === "general") {
            sendData(generalData);
        }
        else if (id === "education") {
            sendData(educationData);
        }
        else {
            sendData(workData);
        }
    }

    if (type === "General Information") {
        return (
            <form action="">
                <div className="form-field">
                    <label htmlFor="userName">Name</label>
                    <input 
                        type="text" 
                        id="userName" 
                        value={generalData.userName}
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={generalData.email} 
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        id="phone"
                        value={generalData.phone}
                        onChange={inputOnChange}    
                    />
                </div>
                <button 
                    type="button" 
                    id="general" 
                    onClick={submitBtnHandler}>Submit
                </button>
            </form>
        )
    }
    else if (type === "Education") {
        return (
            <form action="">
                <div className="form-field">
                    <label htmlFor="schoolName">School Name</label>
                    <input 
                        type="text" 
                        id="schoolName"
                        value={educationData.schoolName} 
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="fieldOfStudy">Field of Study</label>
                    <input 
                        type="text" 
                        id="fieldOfStudy"
                        value={educationData.fieldOfStudy} 
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="graduationDate">Graduation Date</label>
                    <input 
                        type="date" 
                        id="graduationDate"
                        value={educationData.graduationDate} 
                        onChange={inputOnChange}    
                    />
                </div>
                <button 
                    type="button"
                    id="education" 
                    onClick={submitBtnHandler}>Submit
                 </button>
            </form>
        )
    }
    else if (type === "Work Experience"){
        return (
            <form action="">
                <div className="form-field">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                        type="text" 
                        id="companyName"
                        value={workData.companyName}
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="title">Position Title</label>
                    <input 
                        type="text" 
                        id="title"
                        value={workData.title}
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input 
                        type="text"
                        id="responsibilities"
                        value={workData.responsibilities}
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        type="date" 
                        id="startDate"
                        value={workData.startDate}
                        onChange={inputOnChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="endDate">End Date</label>
                    <input 
                        type="date" 
                        id="endDate"
                        value={workData.endDate}
                        onChange={inputOnChange}
                    />
                </div>
                <button 
                    type="button" 
                    id="experience" 
                    onClick={submitBtnHandler}>Submit
                </button>
            </form>
        )
    }

}