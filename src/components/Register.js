import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    const getUserDetails = (event) => {
        event.preventDefault();
    
        const variables = {
            title: "My React Phonebook Contact Project",
            body: "This is the kickoff stage",
        };
    
        axios.post(baseURL, variables).then((res) => {
        });
    };

    return (
        <div>
            <p>Registration page</p>



        </div>





           
    );

};

export default Register;