import { useState } from "react";
import "../styles/GeneralInfo.css";

export function GeneralInfo(props) {

    const [dataObj, setDataObj] = useState({name: "", email: "", phoneNum: ""});

    return (
        <div className="general-info">
            <header>
                <h2>General Information</h2>
                <button>Open</button>
            </header>
            <form action="">
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone"/>
                </div>
            </form>
        </div>
    );
}