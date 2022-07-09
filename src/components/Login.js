import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    const submitFormValues = (event) => {
        event.preventDefault();
        console.log(email, password);
    
        axios
            .post(baseURL, {
                title: "My first post with JSON placeholder",
                body: "This is my first article",
            })
            .then((response) => {
                if (response.status === 201) {
                    // navigate("/all-contacts");
                } else {
                    alert("email or password not correct");
                }

            });
    };
    return (
        <div>
            <p>My Login Form</p>
            <form action="" onSubmit={submitFormValues}>
                <label htmlFor="email">
                  Email:{" "}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>{" "}
                <br />
                    <label htmlFor="email">
                    Password:{" "}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                />
                </label>{" "}
                <br />
                <input type="submit" />
                <p>
                    New user? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;