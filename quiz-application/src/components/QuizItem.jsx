import React, {useState} from "react";

const QuizItem = ({question, onSelectAnswer}) => {
    const [selected, setSelected] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = (option) => {
        setSelected(option);
        onSelectAnswer(question.id, option);
    };

    return(
        <div>
            <h2>{question.text}</h2>
            {question.options.map((option, index)=> (
               <button key={index} onclick = {() => handleClick(option)}
               style={{backgroundcolor:selected === option ? "lightblue" : "white" }}
               >
               {option}
               </button>


            ))}

            <button onclick={() =>setShowAnswer(!showAnswer)}>Show Answer</button>
            {showAnswer && <p>{question.correctAnswer}</p>}
        </div>
    );

};

export default QuizItem;
