import React, {useEffect, useState} from "react";
import  axios from "axios";

const Result = () =>{
    const[score, setScore]=useState(null);

    useEffect(() =>{
        const userId=1;

        axios.get(`https://balanced-violet-spy.glitch.me/api/result/${userId}`).then(response =>getScore(response.data.score)).catch(error =>console.error("Error fetching results:", error));

    },[]);
    return(
        <div>
            <h2>Quiz Result</h2>
            {score !==null ? <p>Your Score:{score}</p> : <p>Loading ...</p>}
        </div>
    );
};

export default Result;



