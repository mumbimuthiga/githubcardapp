import React, { Component } from 'react';
import "./site.css";

export default class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <h1>SignUp</h1>
                <div className="details">
                    <div className="form-input">
                    <label htmlFor="FirstName"></label>
                    <input type="name" placeholder="First Name" required={true}></input>
                    </div>
                    <div className="form-input">
                    <label htmlFor="SecondName"></label>
                    <input type="name" placeholder="Second Name" required={true}></input>
                    </div>
                    <div className="form-input">
                    <label htmlFor="Email"></label>
                    <input type="email" placeholder="email" required={true}></input>
                    </div>
                    <button type="submit">Submit</button>

                </div>
                
            </div>
        )
    }
}
