import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import lose from "../assets/lose.mp3";
import win from "../assets/win.mp3";

const Quiz = ({ setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(
    "answer cursor-pointer w-[40%] p-[10px] text-center border border-solid border-white rounded-[15px] text-xl font-light bg-gradient-to-b from-[#0e0124] to-[#22074d]"
  );
  const [correctAnswer] = useSound(win);
  const [wrongAnswer] = useSound(lose);

  useEffect(() => {
    fetchQuestion();
  }, [questionNumber]);

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple"
      );
      const data = await response.json();
      setQuestion(data.results[0]);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName(
      "answer cursor-pointer w-[40%] p-[10px] text-center border border-solid border-white rounded-[15px] text-xl font-light bg-gradient-to-b from-[#0e0124] to-[#22074d] active"
    );

    setTimeout(() => {
      if (answer.correct) {
        correctAnswer();
        setTimeout(() => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 2000);
      } else {
        wrongAnswer();
        setTimeout(() => {
          setStop(true);
        }, 1000);
      }
    }, 3000);
  };

  return (
    <div className="h-full flex flex-col items-center justify-around">
      <div className="question w-[80%] rounded-[10px] border-2 border-solid border-white text-center text-xl p-5 bg-gradient-to-b from-[#100241] to-black ">
        {question?.question}
      </div>
      <div className="answers w-full flex justify-center flex-wrap gap-6">
        {question?.incorrect_answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => handleClick(answer)}
            className={
              selectedAnswer === answer
                ? className
                : "answer cursor-pointer w-[40%] p-[10px] text-center border border-solid border-white rounded-[15px] text-xl font-light bg-gradient-to-b from-[#0e0124] to-[#22074d]"
            }
          >
            {answer}
          </div>
        ))}
        <div
          onClick={() => handleClick(question?.correct_answer)}
          className={
            selectedAnswer === question?.correct_answer
              ? className
              : "answer cursor-pointer w-[40%] p-[10px] text-center border border-solid border-white rounded-[15px] text-xl font-light bg-gradient-to-b from-[#0e0124] to-[#22074d]"
          }
        >
          {question?.correct_answer}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
