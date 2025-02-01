import React, {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import  axios from "axios";
import QuizItems from "./QuizItem";

const Quiz = () => {
    const { token } = useContext(AuthContext);
    const navigate=useNavigate();
    const [questions, setQuestions] = useState([]);

    useEffect(() =>{
        if(!token){
            navigate("/");
            return;
        }
        axios.get("https://balanced-violet-spy.glitch.me/api/questions", {headers: {Authorization: `Bearer ${token}`}
        })
        .then(response => setQuestions(response.data))
        .catch(error => console.error("Error fteching questions: ",error));

    },[token, navigate]);

    return(
        <div>
            <h2>Quiz</h2>
            {questions.map((q) => (
                <QuizItem key={q.id} question={q}/>
            ))}
        </div>
    );
};
