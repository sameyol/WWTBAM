import React, { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";
import { quiz } from "./assets/data";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [username, setUsername] = useState(null);

  return (
    <div className="app h-screen flex bg-[#020230] text-white">
      {username ? (
        <>
          <Main
            stop={stop}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
          <Side
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
