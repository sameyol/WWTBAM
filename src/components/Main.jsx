import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import { moneyList } from "../assets/data";
import Timer from "./Timer";

const Main = ({ stop, setStop, questionNumber, setQuestionNumber }) => {
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyList.find((m) => m.id === questionNumber - 1).money);
  }, [moneyList, questionNumber]);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="main flex flex-col w-full md:w-[75%]">
      {stop ? (
        <div className="relative top-0 left-0 right-0 bottom-0 m-auto">
          <h1 className="flex flex-col justify-center items-center text-4xl">
            You earned: {earned}{" "}
          </h1>
          <button
            className="text-center bg-blue-700 w-full my-8 py-4 text-2xl cursor-pointer"
            onClick={handleClick}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="top relative h-[50%]">
            <div className="timer w-[70px] h-[70px] rounded-[50%] border-[5px] border-solid border-white flex items-center justify-center text-[30px] font-bold absolute bottom-2 left-20">
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
          </div>
          <div className="bottom h-[50%]">
            <Quiz
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setStop={setStop}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
