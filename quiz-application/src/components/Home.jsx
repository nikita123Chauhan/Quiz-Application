import React, {useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {login } = useContext(AuthContext);
    const navigate=useNavigate();

    const handlelogin = () =>{
        login(username, password);
        navigate("/quiz");

    };

    return(
        <div>
            <h2>Welcome to the Quiz</h2>
            <input type="Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={handlelogin}>Login</button>
        </div>
    );
};

export default Home;