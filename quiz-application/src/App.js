import React, {useContext} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {user, logout} =useContext(AuthContext);

    return(
        <Router>
            <nav>
                <Link to="/">Home</Link>
                {user && <button onClick={logout}>Logout</button>}
            
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Quiz/>}/>
                <Route path="/" element={<Result/>}/>

            </Routes>
        </Router>
    );
};

export default App;
