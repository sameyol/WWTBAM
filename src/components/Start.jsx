import { useEffect, useRef } from "react";

import useSound from "use-sound";
import themeSong from "../assets/theme.mp3";

const Start = ({ setUsername }) => {
  const [theme] = useSound(themeSong);

  useEffect(() => {
    theme();
  }, [theme]);

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start w-full flex flex-col items-center justify-center">
      <h2>WELCOME TO TODAY'S EDITION OF WWTOAM</h2>
      <div className="form w-[400px]">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter your name"
          className="w-full h-[30px] border-0 rounded-[5px] text-center text-lg focus:outline-none text-black"
        />
        <button
          className="btn w-full h-[30px] cursor-pointer border-0 rounded-[5px] text-center text-lg font-medium bg-white text-black my-4"
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
