import { useState } from "react";
import "../styles/Form.css";

export function Form(props) {

    return (
        <form action="">
            <div className="form-field">
                <label for="name">Name</label>
                <input type="text" id="name"/>
            </div>
            <div className="form-field">
                <label for="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div className="form-field">
                <label for="phone">Phone Number</label>
                <input type="tel" name="userPhone" id="phone" />
            </div>
        </form>
    )
}